#!/usr/bin/env node

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const POSTS_DIR = join(__dirname, '..', 'posts');
const DATA_IMAGES_DIR = join(__dirname, '..', '..', 'data', 'images');
const STATIC_DIR = join(__dirname, '..', 'static');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function getMarkdownFiles(dir) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function extractLinks(content) {
  const links = [];
  
  // Match markdown links: [text](url)
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const [fullMatch, text, url] = match;
    const lineNumber = content.substring(0, match.index).split('\n').length;
    
    links.push({
      text: text.trim(),
      url: url.trim(),
      fullMatch,
      lineNumber,
      type: categorizeLink(url.trim())
    });
  }
  
  // Match image references: ![alt](url)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  
  while ((match = imageRegex.exec(content)) !== null) {
    const [fullMatch, alt, url] = match;
    const lineNumber = content.substring(0, match.index).split('\n').length;
    
    links.push({
      text: alt.trim(),
      url: url.trim(),
      fullMatch,
      lineNumber,
      type: 'image'
    });
  }
  
  return links;
}

function categorizeLink(url) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return 'external';
  } else if (url.startsWith('/posts/')) {
    if (url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif') || url.includes('.svg')) {
      return 'image';
    }
    return 'internal-post';
  } else if (url.startsWith('./')) {
    return 'relative';
  } else if (url.startsWith('/')) {
    return 'absolute';
  } else if (url === '') {
    return 'empty';
  } else {
    return 'unknown';
  }
}

function validateInternalPostLink(url) {
  // Extract post slug from URL like /posts/post-slug
  const match = url.match(/^\/posts\/([^\/]+)$/);
  if (!match) {
    return { valid: false, reason: 'Invalid internal post URL format' };
  }
  
  const slug = match[1];
  const expectedFile = join(POSTS_DIR, `${slug}.md`);
  
  if (existsSync(expectedFile)) {
    return { valid: true };
  } else {
    return { valid: false, reason: `Post file not found: ${slug}.md` };
  }
}

function validateImageLink(url) {
  // Check if image exists in data/images or static directories
  const imagePath = url.replace(/^\//, '');
  
  // Check in data/images directory
  const dataImagePath = join(DATA_IMAGES_DIR, imagePath);
  if (existsSync(dataImagePath)) {
    return { valid: true, location: 'data/images' };
  }
  
  // Check in static directory
  const staticImagePath = join(STATIC_DIR, imagePath);
  if (existsSync(staticImagePath)) {
    return { valid: true, location: 'static' };
  }
  
  return { 
    valid: false, 
    reason: `Image not found in data/images or static directories: ${imagePath}`,
    checkedPaths: [dataImagePath, staticImagePath]
  };
}

function validateLinks(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);
  const results = [];
  
  for (const link of links) {
    const result = {
      file: filePath,
      line: link.lineNumber,
      text: link.text,
      url: link.url,
      type: link.type,
      valid: true,
      issues: []
    };
    
    // Validate based on link type
    switch (link.type) {
      case 'empty':
        result.valid = false;
        result.issues.push('Empty URL');
        break;
        
      case 'relative':
        result.valid = false;
        result.issues.push('Relative link should use /posts/ format for consistency');
        break;
        
      case 'internal-post':
        const postValidation = validateInternalPostLink(link.url);
        if (!postValidation.valid) {
          result.valid = false;
          result.issues.push(postValidation.reason);
        }
        break;
        
      case 'image':
        const imageValidation = validateImageLink(link.url);
        if (!imageValidation.valid) {
          result.valid = false;
          result.issues.push(imageValidation.reason);
          if (imageValidation.checkedPaths) {
            result.checkedPaths = imageValidation.checkedPaths;
          }
        } else {
          result.imageLocation = imageValidation.location;
        }
        break;
        
      case 'external':
        // External links are assumed valid for now
        // Could add HTTP checks here if needed
        break;
        
      case 'absolute':
        // Check if it's a valid absolute path
        if (!link.url.startsWith('/posts/') && !link.url.startsWith('/static/')) {
          result.issues.push('Absolute path may not be valid');
        }
        break;
        
      default:
        result.issues.push(`Unknown link type: ${link.type}`);
    }
    
    results.push(result);
  }
  
  return results;
}

function runTests() {
  log(`${colors.bold}🔍 Markdown Link Validator${colors.reset}\n`);
  
  const markdownFiles = getMarkdownFiles(POSTS_DIR);
  log(`Found ${markdownFiles.length} markdown files to check\n`);
  
  let totalLinks = 0;
  let validLinks = 0;
  let invalidLinks = 0;
  const issues = [];
  
  for (const file of markdownFiles) {
    const results = validateLinks(file);
    const relativePath = file.replace(POSTS_DIR + '/', '');
    
    if (results.length === 0) {
      continue;
    }
    
    totalLinks += results.length;
    
    const fileValidLinks = results.filter(r => r.valid).length;
    const fileInvalidLinks = results.filter(r => !r.valid).length;
    
    validLinks += fileValidLinks;
    invalidLinks += fileInvalidLinks;
    
    if (fileInvalidLinks > 0) {
      log(`${colors.red}❌ ${relativePath}${colors.reset}`);
      
      for (const result of results.filter(r => !r.valid)) {
        log(`  Line ${result.line}: ${colors.yellow}${result.fullMatch || `[${result.text}](${result.url})`}${colors.reset}`);
        for (const issue of result.issues) {
          log(`    ${colors.red}• ${issue}${colors.reset}`);
        }
        
        issues.push({
          file: relativePath,
          line: result.line,
          url: result.url,
          text: result.text,
          type: result.type,
          issues: result.issues
        });
      }
      log('');
    } else {
      log(`${colors.green}✅ ${relativePath}${colors.reset} (${fileValidLinks} links)`);
    }
  }
  
  // Summary
  log(`\n${colors.bold}📊 Summary${colors.reset}`);
  log(`Total links checked: ${totalLinks}`);
  log(`${colors.green}Valid links: ${validLinks}${colors.reset}`);
  log(`${colors.red}Invalid links: ${invalidLinks}${colors.reset}`);
  
  if (invalidLinks > 0) {
    log(`\n${colors.bold}🔧 Issues by Category${colors.reset}`);
    
    const issuesByType = {};
    for (const issue of issues) {
      const key = issue.type;
      if (!issuesByType[key]) {
        issuesByType[key] = [];
      }
      issuesByType[key].push(issue);
    }
    
    for (const [type, typeIssues] of Object.entries(issuesByType)) {
      log(`\n${colors.yellow}${type.toUpperCase()} (${typeIssues.length})${colors.reset}`);
      for (const issue of typeIssues) {
        log(`  ${issue.file}:${issue.line} - ${issue.url}`);
      }
    }
    
    process.exit(1);
  } else {
    log(`\n${colors.green}🎉 All links are valid!${colors.reset}`);
    process.exit(0);
  }
}

// Run the tests
runTests();

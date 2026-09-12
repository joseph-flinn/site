import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import posts from '../../../dist/posts.json' with {type: "json"};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://joseph.flinnlab.com';
const OUTPUT_DIR = path.resolve(__dirname, '../../../dist');

const year = new Date().getFullYear();

const escapeXml = (unsafe) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
};

const render = (posts) => {
  const sortedPosts = Object.values(posts).sort((postA, postB) => 
    new Date(postA.published) > new Date(postB.published) ? -1 : 1
  );

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" >
  <channel>
    <title>Joseph Flinn</title>
    <link>${SITE_URL}</link>
    <description>Joseph Flinn's blog about optimizing technology organizations</description>
    <copyright>Copyright ${year} Joseph Flinn</copyright>
    ${sortedPosts
      .map(
        (post) => `
        <item>
          <guid>${SITE_URL}/posts/${post.slug}</guid>
          <title>${escapeXml(post.title)}</title>
          <link>${SITE_URL}/posts/${post.slug}</link>
          <description>${escapeXml(post.description)}</description>
          <pubDate>${new Date(post.published).toUTCString()}</pubDate>
        </item>`
      )
      .join('')
    }
  </channel>
</rss>
`;
};

async function main() {
  try {
    const rssContent = render(posts);
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    await fs.writeFile(path.join(OUTPUT_DIR, 'rss.xml'), rssContent);
    console.log(`RSS feed generated successfully at ${path.join(OUTPUT_DIR, 'rss.xml')}`);
  } catch (err) {
    console.error('Error generating RSS feed:', err);
    process.exit(1);
  }
}

main();

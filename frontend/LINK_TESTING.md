# Markdown Link Testing

This directory contains a comprehensive test suite for validating all markdown links in your blog posts.

## Running the Tests

```bash
npm run test:links
```

Or directly:

```bash
node test-links.js
```

## What It Tests

The test suite validates all links in markdown files located in `src/posts/` and checks for:

### 1. **Empty Links** ❌
Links with no URL: `[text]()`

### 2. **Internal Post Links** 🔗
Links to other blog posts: `[text](/posts/post-slug)`
- Verifies the target markdown file exists in `src/posts/`

### 3. **Image Links** 🖼️
Image references: `![alt text](/posts/0001/image.png)`
- Checks if images exist in `../data/images/` directory
- Falls back to checking `static/` directory

### 4. **Relative Links** ⚠️
Links using relative syntax: `[text](./other-post)`
- Flags these as inconsistent (should use `/posts/` format)

### 5. **External Links** 🌐
HTTP/HTTPS links: `[text](https://example.com)`
- Currently marked as valid (could add HTTP validation if needed)

## Output

The test provides detailed reporting:

- ✅ **Green checkmarks** for files with all valid links
- ❌ **Red X marks** for files with issues
- **Line numbers** for each problematic link
- **Summary statistics** of total/valid/invalid links
- **Issue categorization** by type

## Examples

### Valid Links ✅
```markdown
[Internal post link](/posts/my-blog-post)
![Image](/posts/0001/diagram.png)
[External link](https://example.com)
```

### Invalid Links ❌
```markdown
[Empty link]()
[Relative link](./other-post)
[Missing post](/posts/non-existent-post)
![Missing image](/posts/0001/missing.png)
```

## Integration

Add this to your development workflow:

1. **Pre-commit hooks**: Run before committing changes
2. **CI/CD pipeline**: Run in automated builds
3. **Manual testing**: Before publishing new posts

## Adding New Validations

The test suite is easily extensible. To add new link validation rules:

1. Modify the `categorizeLink()` function to identify new link types
2. Add validation logic in the `validateLinks()` function
3. Update the switch statement to handle the new type

## Configuration

Key paths are configured at the top of `test-links.js`:

- `POSTS_DIR`: Location of markdown files
- `DATA_IMAGES_DIR`: Location of image assets
- `STATIC_DIR`: Location of static assets

## Exit Codes

- **0**: All links valid
- **1**: One or more invalid links found
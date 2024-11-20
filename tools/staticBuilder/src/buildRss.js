import fs from 'fs';
import posts from '../../../dist/posts.json' assert {type: "json"};


const SITE_URL = 'https://joseph.flinnlab.com';
const OUTPUT_DIR = '../../dist';

const rssPosts = Object.values(posts).sort((postA, postB) => postA.published > postB.published ? -1 : 1)

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
}


const render = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" >
  <channel>
    <title>Joseph Flinn</title>
    <link>${SITE_URL}</link>
    <description>Joseph Flinn's blog about optimizing technology organizations</description>
    <copyright>Copyright 2023 Joseph Flinn</copyright>
    ${rssPosts
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

// Save post data to posts.json
fs.writeFile(`${OUTPUT_DIR}/rss.xml`, render(posts), (err) => {
  if (err) throw err;
})

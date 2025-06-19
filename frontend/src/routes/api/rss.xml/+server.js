import { getPosts } from '$lib/posts';
import { env } from '$lib/env';

const SITE_URL = env.PUBLIC_SITE;
const YEAR = new Date().getFullYear();

export const GET = async () => {
  const posts = await getPosts();

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
    <copyright>Copyright ${YEAR} Joseph Flinn</copyright>
    ${posts
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

  return new Response(render(posts), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

import posts from '../../posts.json';
import { VITE_BASE_ENDPOINT } from meta.env;

const SITE_URL = 'https://joseph.flinnlab.com'


const render = posts => {
  const render = (posts) => `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
      <title>Joseph Flinn</title>
      <link>${SITE_URL}</link>
      <description>Joseph Flinn's blog about optimizing technology organizations</description>
      ${posts
        .map(
          (post) => `
            <item>
              <guid>${SITE_URL}/posts/${post.slug}</guid>
              <title>${post.title}</title>
              <link>${SITE_URL}/posts/${post.slug}</link>
              <description>${post.description}</description>
              <pubDate>${new Date(post.published).toUTCString()}</pubDate>
            </item>`
        )
        .join('')
      }
    </channel>
  </rss>
`;
};


export const get = async () => {
  //const res = await fetch(import.meta.env.VITE_BASE_ENDPOINT + '/posts/posts.json');
  //const data = await res.json();
  //const body = render(data.posts);
  const body = render(posts);
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
};



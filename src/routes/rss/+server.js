export const prerender = true;

import posts from '../../posts.json';

const SITE_URL = 'https://joseph.flinnlab.com';


const rssPosts = Object.values(posts).sort((postA, postB) => postA.published > postB.published ? -1 : 1)

const render = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" >
  <channel>
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
    <title>Joseph Flinn</title>
    <link>${SITE_URL}</link>
    <description>Joseph Flinn's blog about optimizing technology organizations</description>
    <copyright>Copyright 2023 Joseph Flinn</copyright>

    ${rssPosts
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


export const GET = async () => {
  const body = render(posts);
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return new Response(
    body,
    { headers: headers }
  );
};



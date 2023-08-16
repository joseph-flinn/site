/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env) {
		const headers = new Headers();
		headers.set('Access-Control-Allow-Origin', '*');

    const url = new URL(request.url);
    const key = url.pathname.slice(1);
		console.log(`key: ${key}`)

		const routeRSS = /rss.xml/,
			    routePostList = /posts$/,
				  routePost = /posts\/*/;

		switch (true) {
			case routeRSS.test(key):
				console.log(`RSS match found`)
				const rssObject = await env.BLOG_BUCKET.get(key);

				if (rssObject === null) {
					return new Response('Object Not Found', { status: 404 });
				}

				rssObject.writeHttpMetadata(headers);
				headers.set('etag', object.httpEtag);

				return new Response(rssObject.body, {
					headers,
				});
				break;
			case routePostList.test(key):
				const postListObject = await env.BLOG_BUCKET.get('posts.json');

				if (postListObject === null) {
					return new Response('Object Not Found', { status: 404 });
				}


				headers.set('etag', postListObject.httpEtag);

				return new Response(postListObject.body, {
					headers,
				});
				break;
			case routePost.test(key):
				return new Response(JSON.stringify({ message: "Post match found" }, null, 2), {
					headers,
				});
				break;
			default:
				headers.set('Accept', 'application/json')
				const response = {
					message: `${key} not found`
				}
				return new Response(JSON.stringify(response, null, 2), {
					status: 404,
					headers,
				});
				break;
		}
  },
};

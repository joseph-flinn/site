/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const getRSS = async (key, responseHeaders, env) => {
	console.log(`RSS match found`)
	const rssBlob = await env.BLOG_BUCKET.get(key);

	if (rssBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	rssBlob.writeHttpMetadata(responseHeaders);
	responseHeaders.set('etag', rssBlob.httpEtag);

	return new Response(rssBlob.body, {
		responseHeaders,
	});
};

const getPostList = async (key, responseHeaders, env) => {
	const postBlob = await env.BLOG_BUCKET.get('posts.json');

	if (postBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	responseHeaders.set('etag', postBlob.httpEtag);
	responseHeaders.set('Accept', 'application/json');

	return postBlob.json()
		.then(posts => (
			Object.entries(posts)
				.map(([slug, post]) => {
					return {
						slug: post.slug,
						publishied: post.published,
						title: post.title
					}
				})
		))
		.then(postList => {
			return new Response(JSON.stringify({ postList: postList }, null, 4), {
				responseHeaders,
			});
		})
}

const getPost = async (key, responseHeaders, env) => {
	const postBlob = await env.BLOG_BUCKET.get('posts.json');

	if (postBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	responseHeaders.set('etag', postBlob.httpEtag);
	responseHeaders.set('Accept', 'application/json');

	const postSlug = key.split("/")[1];

	return postBlob.json()
		.then(posts => posts[postSlug])
		.then(post => {
			return new Response(JSON.stringify({ post: post }, null, 4), {
				responseHeaders,
			});
		})
}

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
				return getRSS(key, headers, env);
				break;
			case routePostList.test(key):
				return getPostList(key, headers, env);
				break;
			case routePost.test(key):
				return getPost(key, headers, env);
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

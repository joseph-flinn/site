/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}

const getRSS = async (key, env) => {
	console.log(`RSS match found`)
	const rssBlob = await env.BLOG_BUCKET.get(key);

	if (rssBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	if (env.FLAG_USE_HEADERS) {
		return new Response(rssBlob.body, { status: 200, headers: {
			...corsHeaders,
			'etag': rssBlob.httpEtag,
			'Content-type': 'application/xml'
		}});
	} else {
		return new Response(rssBlob.body, { status: 200 });
	}
};

const getPostList = async (key, env) => {
	const postBlob = await env.BLOG_BUCKET.get('posts.json');

	if (postBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	return postBlob.json()
		.then(posts => (
			Object.entries(posts)
				.map(([slug, post]) => {
					return {
						slug: post.slug,
						published: post.published,
						title: post.title
					}
				})
		))
		.then(postList => {
			if (env.FLAG_USE_HEADERS) {
				return new Response(JSON.stringify({ postList: postList }, null, 4), {
					status: 200,
					headers: {
						...corsHeaders,
						'etag': postBlob.httpEtag,
						'Content-type': 'application/json'
					}
				});
			} else {
				return new Response(JSON.stringify({ postList: postList }, null, 4), { status: 200, });
			}
		})
}

const getPost = async (key, env) => {
	const postBlob = await env.BLOG_BUCKET.get('posts.json');

	if (postBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	const postSlug = key.split("/")[1];

	return postBlob.json()
		.then(posts => posts[postSlug])
		.then(post => {
			if (env.FLAG_USE_HEADERS) {
				return new Response(JSON.stringify({ post: post }, null, 4), {
					status: 200,
					headers: {
						...corsHeaders,
						'etag': postBlob.httpEtag,
						'Content-type': 'application/json'
					}
				});
			}
				return new Response(JSON.stringify({ post: post }, null, 4), {
					status: 200,
				});
		})
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);
		console.log(`key: ${key}`)

		const routeRSS = /rss.xml/,
			    routePostList = /posts$/,
				  routePost = /posts\/*/;

		switch (true) {
			case routeRSS.test(key):
				return getRSS(key, env);
				break;
			case routePostList.test(key):
				return getPostList(key, env);
				break;
			case routePost.test(key):
				return getPost(key, env);
				break;
			default:
				if (env.FLAG_USE_HEADERS) {
					return new Response(JSON.stringify({ message: `/${key} not found`}, null, 2), {
						status: 404,
						headers: {
							...corsHeaders,
							'Content-type': 'application/json',
							'My-Header-test': 'did it come through?'
						},
					});
				} else {
					return new Response(JSON.stringify({ message: `/${key} not found`}, null, 2), {
						status: 404,
					});
				}
				break;
		}
  },
};

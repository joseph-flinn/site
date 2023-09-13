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
	'Access-Control-Allow-Methods': 'GET, POST',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}


const isAuthorized = request => {
	const psk = request.headers.get("X-Custom-PSK")
	return psk == "THIS_IS_A_SECRET" ? true : false
}


const isValidData = request => {
	const contentType = request.headers.get("content-type")
	return contentType == "application/json" ? true : false
}


const validatePostRequest = request => {
	const authorized = isAuthorized(request)
	const validData = isValidData(request)

	if (!authorized) {
		return [false, {message: "Not Authorized", status: 403}]
	} else if (!validData) {
		return [false, {message: "Please see POST /drip docs", status: 400}]
	} else {
		return [true, {}]
	}
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


const getPostList = async (env) => {
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


const getDrip = async (key, env) => {}


const postDrip = async (request, env) => {
	const [requestIsValid, error] = validatePostRequest(request)

	if (!requestIsValid) {
		return new Response(JSON.stringify({message: error.message}, null, 2), {status: error.status})
	}

	const reqBody = await request.json()

	if (!("message" in reqBody)) {
		return new Response(JSON.stringify({message: "Please see POST /drip docs"}, null, 2), {status: 400})
	}

	return new Response(
		JSON.stringify({
			message: `POST called on /drip`,
			data: reqBody
		}, null, 2),
		{status: 200}
	);
}


export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);
		const method = request.method;

		const routeRSS = /rss.xml/,
			    routePostList = /posts$/,
				  routePost = /posts\/*/,
			    routeDrip = /drip$/;

		switch (true) {
			case routeRSS.test(key):
				return getRSS(key, env);
			case routePostList.test(key):
				return getPostList(env);
			case routePost.test(key):
				return getPost(key, env);
			case routeDrip.test(key):
				switch (method) {
					case 'GET':
						return new Response(
							JSON.stringify({
								message: `GET called on /${key}`
							}, null, 2),
							{status: 200}
						);
					case 'POST':
						return postDrip(request, env);
					default:
						return new Response(JSON.stringify({message: `Error: ${method} not supported on /${key}`}, null, 2), {status: 404});
			}
			default:
				if (env.FLAG_USE_HEADERS) {
					return new Response(JSON.stringify({ message: `/${key} not found`}, null, 2), {
						status: 404,
						headers: {
							...corsHeaders,
							'Content-type': 'application/json'
						},
					});
				} else {
					return new Response(JSON.stringify({ message: `/${key} not found`}, null, 2), {
						status: 404,
					});
				}
		}
  },
};

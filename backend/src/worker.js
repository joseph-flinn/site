import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { bearerAuth } from 'hono/bearer-auth'


const app = new Hono()

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, DELETE',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}

const token = "THIS_IS_A_SECRET"


app.get('/rss.xml', async c => {
	const rssBlob = await c.env.BLOG_BUCKET.get('rss.xml');

	if (rssBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	return new Response(rssBlob.body, { status: 200, headers: {
		...corsHeaders,
		'etag': rssBlob.httpEtag,
		'Content-type': 'application/xml'
	}});

})


app.get('/posts', async c => {
	const postBlob = await c.env.BLOG_BUCKET.get('posts.json');

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
			return new Response(JSON.stringify({ postList: postList }, null, 4), {
				status: 200,
				headers: {
					...corsHeaders,
					'etag': postBlob.httpEtag,
					'Content-type': 'application/json'
				}
			});
		})
})


app.get('/posts/:slug', async c => {
	const { slug } = c.req.param()

	const postBlob = await c.env.BLOG_BUCKET.get('posts.json');

	if (postBlob === null) {
		return new Response('Object Not Found', { status: 404 });
	}

	return postBlob.json()
		.then(posts => posts[slug])
		.then(post => {
			return new Response(JSON.stringify({ post: post }, null, 4), {
				status: 200,
				headers: {
					...corsHeaders,
					'etag': postBlob.httpEtag,
					'Content-type': 'application/json'
				}
			});
		})
})


app.post(
	'/drip',
	bearerAuth({ token }),
	validator('header', (value, c) => {
		if (!value["content-type"] || value["content-type"] != "application/json") {
			return c.text("Invalid headers", 400)
		}
		return value
	}),
	validator('json', (value, c) => {
		if (!("message" in value)) return c.text('Invalid body', 400)

		return value
	}),
	async c => {
		const headers = c.req.valid('header')
		const body = c.req.valid('json')

		const action = 'id' in body ? 'update drip' : 'create drip'
		const response = `POST called on /drip. Action: ${action}`

		return c.text(
			JSON.stringify({
				message: response,
				data: body
			}, null, 2),
			200
		)
	}
)


app.get('/drip', async c => {
	return c.text(
		JSON.stringify({
			message: `GET called on /drip`
		}, null, 2),
		200
	);

})


app.delete(
	'/drip',
	bearerAuth({ token }),
	validator('header', (value, c) => {
		if (!value["content-type"] || value["content-type"] != "application/json") {
			return c.text("Invalid headers", 400)
		}
		return value
	}),
	validator('json', (value, c) => {
		if (!("message" in value)) return c.text('Invalid body', 400)

		return value
	}),
	async c => {
		const headers = c.req.valid('header')
		const body = c.req.valid('json')

		return c.text(
			JSON.stringify({
				message: 'DELETE called on /drip',
				data: body
			}, null, 2),
			200
		)
	}
)

export default app

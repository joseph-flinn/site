import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { bearerAuth } from 'hono/bearer-auth'
import { cors } from 'hono/cors'
import { etag } from 'hono/etag'


const app = new Hono()

app.use('/*', cors());
app.use('/*', etag());


const token = "THIS_IS_A_SECRET"


app.get('/rss.xml', async c => {
	const rssBlob = await c.env.BLOG_BUCKET.get('rss.xml');

	if (rssBlob === null) return c.text('Object not found', 404)

	c.header('content-type', 'application/xml')
	c.header('etag', rssBlob.httpEtag)
	return c.text(rssBlob.body, 200)
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
			c.header('content-type', 'application/json')
			c.header('etag', postBlob.httpEtag)
			return c.text(JSON.stringify({ postList: postList }), 200)
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
			c.header('content-type', 'application/json')
			c.header('etag', postBlob.httpEtag)
			return c.text(JSON.stringify({ post: post}), 200)
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

		const action = 'id' in body ? 'update' : 'create'
		const response = `POST called on /drip. Action: ${action}`

		if (action == "update") {
			if (!("message" in body)) return c.text('Invalid body for update', 400)

			const { success } = await c.env.DB_DRIP.prepare(`
				update drip set message=? where id=?
			`).bind(body['message'], body['id']).run()

		} else {
			console.log(`c.env: ${JSON.stringify(c.env, null, 2)}`)
			const { success } = await c.env.DB_DRIP.prepare(`
				insert into drip (message) values (?)
			`).bind(body['message']).run()
		}

		if (success) return c.text(JSON.stringify({ message: 'drip created' }, null, 2), 201)

		return c.text(JSON.stringify({ message: 'something went wrong'}, null, 2), 500)
	}
)


app.get('/drip', async c => {
	const { success } = await c.env.DB_DRIP.prepare(`
		select * from drip LIMIT=1
	`).bind(body['message']).run()

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

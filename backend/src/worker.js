import { Hono } from 'hono'


const app = new Hono()

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, DELETE',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}


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


export default app

import { check, group, sleep } from 'k6'
import http from 'k6/http'

/*
export const options = {
    duration: '10s',
    vus: 1,
    thresholds: {
        http_req_failed: ['rate==0.00'],
        http_req_duration: ['p(95)<1000'],
    },
}
*/

//let shortenLink

//const BASE_URL = "https://blog-dev.flinnlab.workers.dev"
const BASE_URL = "http://localhost:8787"


export default function () {
	// GROUP: rss
	group('rss', function () {
		const res = http.get(`${BASE_URL}/rss.xml`)

		check(res, {
			'is status 200': (r) => r.status === 200,
			'verify RSS feed': (r) => r.body.includes('flinnlab.com')
		})

    sleep(1) // second
  })


	// GROUP: post
	group('post', function () {
		const res = http.get(`${BASE_URL}/posts`)

		check(res, {
			'postsPage: status is 200': (r) => r.status === 200,
			'postsPage: formatted correctly': (r) => 'postList' in r.json(),
			'postsPage: is not empty': (r) => r.json()['postList'].length != 0
		})

    sleep(1) // second
  })

	group('post', function () {
		const res = http.get(`${BASE_URL}/posts/git-monorepo`)

		check(res, {
			'postPage: status is 200': (r) => r.status === 200,
			'postPage: formatted correctly': (r) => 'post' in r.json(),
			'postPage: contains all metadata': (r) => {
				return ['slug', 'title', 'published', 'description', 'body']
					.map(key =>
						key in r.json()['post']
					)
					.reduce((allMetaDataExists, metadataExists) => allMetaDataExists && metadataExists, true);
			}
		})

    sleep(1) // second
  })


	// GROUP: drip
	group('drip', function () {
		const res = http.get(`${BASE_URL}/drip`)

		check(res, {
			'GET: status is 200': (r) => r.status === 200,
			'GET: verify body': (r) => r.body.includes('GET called on /drip')
		})

    sleep(1) // second
  })

	// GROUP: drip
	group('drip', function () {
		const res = http.post(`${BASE_URL}/drip`)

		check(res, {
			'POST - auth: status is 200': (r) => r.status === 403,
			'POST - auth: verify body': (r) => r.body.includes('Not Authorized')
		})

    sleep(1) // second
  })

	// GROUP: drip
	group('drip', function () {
		const payload = JSON.stringify({
			message: 'hello',
		});

		const params = {
			headers: {
				'X-Custom-PSK': __ENV.PSK,
				'Content-Type': 'application/json',
			},
		};

		const res = http.post(`${BASE_URL}/drip`, payload, params)
		check(res, {
			'POST - create: status is 200': (r) => r.status === 200,
			'POST - create: verify body': (r) => r.body.includes('create drip')
		})

    sleep(1) // second
  })

	group('drip', function () {
		const payload = JSON.stringify({
			id: 0,
			message: 'hello',
		});

		const params = {
			headers: {
				'X-Custom-PSK': __ENV.PSK,
				'Content-Type': 'application/json',
			},
		};

		const res = http.post(`${BASE_URL}/drip`, payload, params)
		check(res, {
			'POST - update: status is 200': (r) => r.status === 200,
			'POST - update: verify body': (r) => r.body.includes('update drip')
		})

    sleep(1) // second
  })
}

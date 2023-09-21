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

const SLEEP_TIME = 0.5

const BASE_URL = __ENV.ENV == "staging" ? "https://blog-dev.flinnlab.workers.dev" : "http://localhost:8787"


export default function () {
	// GROUP: rss
	group('rss', function () {
		const res = http.get(`${BASE_URL}/rss.xml`)

		check(res, {
			'is status 200': (r) => r.status === 200,
			'verify RSS feed': (r) => r.body.includes('flinnlab.com')
		})

    sleep(SLEEP_TIME) // second
  })


	// GROUP: post
	group('post', function () {
		const res = http.get(`${BASE_URL}/posts`)

		check(res, {
			'postsPage: status is 200': (r) => r.status === 200,
			'postsPage: formatted correctly': (r) => 'postList' in r.json(),
			'postsPage: is not empty': (r) => r.json()['postList'].length != 0
		})

    sleep(SLEEP_TIME) // second
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

    sleep(SLEEP_TIME) // second
  })


	// GROUP: drip
	group('drip', function () {
		const res = http.get(`${BASE_URL}/drip`)

		const json = res.json()
		check(res, {
			'GET: status is 200': (r) => r.status === 200,
			'GET: verify body': (r) => "data" in json
		})

    sleep(SLEEP_TIME) // second
  })

	group('drip', function () {
		const res = http.post(`${BASE_URL}/drip`)

		check(res, {
			'POST - auth: status is 403': (r) => r.status === 401,
			'POST - auth: verify body': (r) => r.body.includes('Unauthorized')
		})

    sleep(SLEEP_TIME) // second
  })

	group('drip', function () {
		const payload = JSON.stringify({
			message: 'hello',
		});

		const params = {
			headers: {
				'Authorization': `Bearer ${__ENV.PSK}`,
				'Content-Type': 'application/json',
			},
		};

		const res = http.post(`${BASE_URL}/drip`, payload, params)
		check(res, {
			'POST - create: status is 201': (r) => r.status === 201,
			'POST - create: verify body': (r) => r.body.includes('create')
		})

    sleep(SLEEP_TIME) // second
  })

	group('drip', function () {
		const payload = JSON.stringify({
			id: 0,
			message: 'hello',
		});

		const params = {
			headers: {
				'Authorization': `Bearer ${__ENV.PSK}`,
				'Content-Type': 'application/json',
			},
		};

		const res = http.post(`${BASE_URL}/drip`, payload, params)
		check(res, {
			'POST - update: status is 201': (r) => r.status === 201,
			'POST - update: verify body': (r) => r.body.includes('update')
		})

    sleep(SLEEP_TIME) // second
  })
}

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

const BASE_URL = "https://blog-dev.flinnlab.workers.dev"

export default function () {
	group('rss feed', function () {
		const res = http.get(`${BASE_URL}/rss.xml`)

		check(res, {
			'is status 200': (r) => r.status === 200,
			'verify RSS feed': (r) => r.body.includes('flinnlab.com')
		})

    sleep(1) // second
  })

	group('list of posts', function () {
		const res = http.get(`${BASE_URL}/posts`)

		check(res, {
			'is status 200': (r) => r.status === 200,
			'is formatted correctly': (r) => 'postList' in r.json(),
			'is not empty': (r) => r.json()['postList'].length != 0
		})

    sleep(1) // second
  })

	group('post', function () {
		const res = http.get(`${BASE_URL}/posts/git-monorepo`)

		check(res, {
			'is status 200': (r) => r.status === 200,
			'is formatted correctly': (r) => 'post' in r.json(),
			'contains all metadata': (r) => {
				return ['slug', 'title', 'published', 'description', 'body']
					.map(key =>
						key in r.json()['post']
					)
					.reduce((allMetaDataExists, metadataExists) => allMetaDataExists && metadataExists, true);
			}
		})

    sleep(1) // second
  })
}

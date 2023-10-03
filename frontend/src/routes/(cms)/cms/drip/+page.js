import { token } from '$lib/store.js'

let authToken = '';

token.subscribe((value) => {
  authToken = value
})

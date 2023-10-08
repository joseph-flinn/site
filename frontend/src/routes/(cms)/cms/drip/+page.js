import { token } from '$lib/store.js'
import { getDropList } from '$lib/utils/loader.js';

let authToken = '';

token.subscribe((value) => {
  authToken = value
})

export const load = async ({fetch}) => {
  return getDropList(fetch);
}

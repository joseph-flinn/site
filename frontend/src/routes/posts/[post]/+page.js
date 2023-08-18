import { getPost } from '$lib/utils/loader.js';

export const ssr = false;

export const load = async ({fetch, params}) => {
    return getPost(params.post, fetch);
}

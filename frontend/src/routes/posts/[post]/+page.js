import { getPost } from '$lib/utils/loader.js';

export const load = async ({fetch, params}) => {
    return getPost(params.post, fetch);
}

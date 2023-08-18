import { getPost } from '$lib/utils/loader.js';


export const load = ({fetch, params}) => {
    return getPost(params.post, fetch);
}

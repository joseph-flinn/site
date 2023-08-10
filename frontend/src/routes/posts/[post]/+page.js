import { getPosts } from '$lib/utils/loader.js';


export const load = ({fetch, params}) => {
    return getPosts(fetch)[params.post];
}

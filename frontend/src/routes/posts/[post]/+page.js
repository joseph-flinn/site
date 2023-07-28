import { getPosts } from '$lib/helpers.js';



export const load = ({fetch, params}) => {
    return getPosts(fetch)[params.post];
}

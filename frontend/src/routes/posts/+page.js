import { getPosts } from '$lib/helpers.js';


export const load = ({fetch}) => {
    return getPosts(fetch);

}

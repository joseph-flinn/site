import { getPostList } from '$lib/utils/loader.js';


export const load = ({fetch}) => {
    return getPostList(fetch);
}

import { getPostList } from '$lib/utils/loader.js';

export const load = async ({fetch}) => {
    return getPostList(fetch);
}

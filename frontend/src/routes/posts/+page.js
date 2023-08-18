import { getPostList } from '$lib/utils/loader.js';

export const ssr = false;

export const load = async ({fetch}) => {
    return getPostList(fetch);
}

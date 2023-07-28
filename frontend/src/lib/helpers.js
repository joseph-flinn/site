import { config } from '$lib/config.json';

let POSTS_CACHE = null;

export const getPosts = (fetch) => {
    if (POSTS_CACHE !== null) return POSTS_CACHE;

    return fetch(`${config.dataUrl}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POSTS_CACHE = resp;
        })
        .then(() => POSTS_CACHE);
};

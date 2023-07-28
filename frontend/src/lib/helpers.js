import { config } from '$lib/config.json';

var POSTS_CACHE = null;

export const getPosts = (fetch) => {
    POSTS_CACHE === null ? console.log("Cache is null: 1") : console.log("Cache NOT null")
    if (POSTS_CACHE !== null) return POSTS_CACHE;

    return fetch(`${config.dataUrl}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POSTS_CACHE === null ? console.log("Cache is null: 2") : console.log("Cache NOT null")
            POSTS_CACHE = resp;
            POSTS_CACHE === null ? console.log("Cache is null: 3") : console.log("Cache NOT null")
        })
        .then(() => POSTS_CACHE);
};

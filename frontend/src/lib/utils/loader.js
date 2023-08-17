import { 
    PUBLIC_DATASOURCE_TYPE,  
    PUBLIC_DATASOURCE,
} from '$env/static/public';

import { log } from '$lib/utils/logger.js';


let POST_LIST_CACHE = null;
let POSTS_CACHE = {};


export const getPostList = (fetch) => {
    log('$lib.helpers:getPosts()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)

    if (POST_LIST_CACHE !== null) {
        log('$lib.helpers:getPosts()', "posts cache hit")
        return { postList: POST_LIST_CACHE };
    };

    if (PUBLIC_DATASOURCE_TYPE == 'local') {
        // posts.json must be hardcoded because of Vite
        return import('../../posts.json').then(posts => {
            POST_LIST_CACHE = Object.entries(posts.default)
                .map(([slug, post]) => {
                    return {
                       slug: post.slug,
                       published: post.published,
                       title: post.title
                    }
               })
        }).then(() => { postList: POST_LIST_CACHE });
    }

    return fetch(`${PUBLIC_DATASOURCE}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POSTS_CACHE = resp;
        })
        .then(() => POSTS_CACHE);
};


export const getPost = (postSlug, fetch) => {
};

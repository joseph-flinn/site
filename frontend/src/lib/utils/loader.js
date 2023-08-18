import { 
    PUBLIC_DATASOURCE_TYPE,  
    PUBLIC_DATASOURCE,
} from '$env/static/public';

import { log } from '$lib/utils/logger.js';


let POST_LIST_CACHE = null;
let POSTS_CACHE = {};


const buildPostList = (postsData) => {
    return Object.entries(postsData)
        .map(([slug, post]) => {
            return {
               slug: post.slug,
               published: post.published,
               title: post.title
            }
       })
}

export const getPostList = (fetch) => {
    log('$lib.utils.loader:getPostList()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)

    if (POST_LIST_CACHE !== null) {
        log('$lib.utils.loader:getPostList()', "posts cache hit")
        return { postList: POST_LIST_CACHE };
    };

    if (PUBLIC_DATASOURCE_TYPE === 'localfs') {
        // posts.json must be hardcoded because of Vite
        return import('../../posts.json').then(posts => {
            POST_LIST_CACHE = buildPostList(posts.default);
        }).then(() => ({ postList: POST_LIST_CACHE }));
    }

    if (PUBLIC_DATASOURCE_TYPE === 'network_dynamic') {
        return fetch(`${PUBLIC_DATASOURCE}/posts`)
            .then(response => response.json())
            .then(resp => {
                POST_LIST_CACHE = buildPostList(posts);
            })
            .then(() => ({ postList: POST_LIST_CACHE }));
    }

    return fetch(`${PUBLIC_DATASOURCE}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POST_LIST_CACHE = buildPostList(posts);
        })
        .then(() => ({ postList: POST_LIST_CACHE }));

};


export const getPost = (postSlug, fetch) => {
    log('$lib.utils.loader:getPost()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)

    if (postSlug in POSTS_CACHE) {
        log('$lib.utils.loader:getPost()', "posts cache hit")
        return { post: POSTS_CACHE[postSlug] };
    };

    if (PUBLIC_DATASOURCE_TYPE === 'localfs') {
        // posts.json must be hardcoded because of Vite
        return import('../../posts.json').then(posts => {
            POSTS_CACHE[postSlug] = posts.default[postSlug];
        }).then(() => ({ post: POSTS_CACHE[postSlug] }));
    }

    if (PUBLIC_DATASOURCE_TYPE === 'network_dynamic') {
        log('$lib.utils.loader:getPost()', "using network_dynamic")
        return fetch(`${PUBLIC_DATASOURCE}/posts/${postSlug}`)
            .then(response => response.json())
            .then(resp => {
                POSTS_CACHE[postSlug] = resp;
            })
            .then(() => ({ post: POSTS_CACHE[postSlug] }));
    }

    return fetch(`${PUBLIC_DATASOURCE}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POSTS_CACHE = resp;
        })
        .then(() => ({ post: POSTS_CACHE[postSlug] }));
};

// import { config } from '$lib/config.json';
import { 
    PUBLIC_DATASOURCE_TYPE,  
    PUBLIC_DATASOURCE,
    PUBLIC_LOGGING_ENABLED
} from '$env/static/public';


let POSTS_CACHE = null;


export const getPosts = (fetch) => {
    log('$lib.helpers:getPosts()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)

    if (POSTS_CACHE !== null) {
        log('$lib.helpers:getPosts()', "posts cache hit")
        return POSTS_CACHE
    };

    if (PUBLIC_DATASOURCE_TYPE == 'local') {
       return import('../posts.json').then(posts => {
           POSTS_CACHE = posts.default
       }).then(() => POSTS_CACHE);
    }

    return fetch(`${PUBLIC_DATASOURCE}/posts.json`)
        .then(response => response.json())
        .then(resp => {
            POSTS_CACHE = resp;
        })
        .then(() => POSTS_CACHE);
};


export const log = (obj, message) => {
    if (PUBLIC_LOGGING_ENABLED == 'true') {
        console.log(`${obj} => ${message}`)
    }
};

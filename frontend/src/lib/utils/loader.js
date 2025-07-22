import { 
    PUBLIC_DATASOURCE_TYPE,  
    PUBLIC_DATASOURCE,
    PUBLIC_IMAGESOURCE,
} from '$env/static/public';

import { log } from '$lib/utils/logger.js';


let MEMOIZATION = {}


const memoizedFetch = (fetch, path, useMemoization = true) => {
    if ((useMemoization === true) && ((MEMOIZATION[path] ?? null) !== null)) {
        return MEMOIZATION[path]
    }
    return fetch(`${PUBLIC_DATASOURCE}${path}`)
        .then(response => response.json())
        .then(resp => {
            MEMOIZATION[path] = {data: resp.data};
        })
        .then(() => (MEMOIZATION[path]));
}


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
    return memoizedFetch(fetch, '/posts')
};


export const getPost = (postSlug, fetch) => {
    log('$lib.utils.loader:getPost()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)
    return memoizedFetch(fetch, `/posts/${postSlug}`)
};


export const getDropList = (fetch) => {
    log('$lib.utils.loader:getDropList()', `Datasource Type: ${PUBLIC_DATASOURCE_TYPE}`)
    return memoizedFetch(fetch, '/drip', false)
};


export const getImageUrl = (imageMarkdownUrl) => {
    log('$lib.utils.loader:getImageUrl()', `Image source: ${PUBLIC_IMAGESOURCE}`)
    return `${PUBLIC_IMAGESOURCE}${imageMarkdownUrl}`
}

import { config } from '$lib/config.json';

export const load = ({fetch, params}) => {
    return fetch(`${config.dataUrl}/posts.json`)
        .then(response => response.json())
        .then(resp => resp[params.post]);

}

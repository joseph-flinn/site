import { config } from '$lib/config.json';

export const load = ({fetch}) => {
    return fetch(`${config.dataUrl}/posts.json`).then(response => response.json());

}

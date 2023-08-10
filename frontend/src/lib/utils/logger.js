import { PUBLIC_LOGGING_ENABLED } from '$env/static/public';


export const log = (obj, message) => {
    if (PUBLIC_LOGGING_ENABLED == 'true') {
        console.log(`${obj} => ${message}`)
    }
};

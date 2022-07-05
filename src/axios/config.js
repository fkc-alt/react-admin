const { REACT_APP_ORIGIN, REACT_APP_API, NODE_ENV } = process.env;

export const TIMEOUT = 5000;

export const BASE_URL = {
    development: REACT_APP_API,
    production: REACT_APP_ORIGIN
}[NODE_ENV];

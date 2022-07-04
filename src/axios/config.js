export const TIMEOUT = 5000;

export const BASE_URL = {
    development: 'http://localhost:3000',
    production: 'http://localhost:3000'
}[process.env.NODE_ENV];

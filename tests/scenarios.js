import http from 'k6/http';
import { check } from 'k6';
const {BASE_URL} = require('../utils/environments.js');

export default function ()
{
    const response = http.get(BASE_URL)
    check(response, {
        'status is 200': (res) => res.status === 200
    });

    check(response, {
        'page is startpage': (res) => res.body.includes('Collection of simple web-pages suitable for load testing')
    });
}
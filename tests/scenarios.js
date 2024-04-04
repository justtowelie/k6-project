import http from 'k6/http';
import { check, sleep } from 'k6';
const {BASE_URL, NEWS} = require('../utils/environments.js');
import exec from 'k6/execution';
import { Counter, Trend } from 'k6/metrics'

export const options = {
    vus: 5,
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<100'],
        // http_req_duration: ['max<2000'],
        // http_req_failed: ['rate<0.01'],
        // http_reqs: ['count>20'],
        // checks: ['rate>=0.98'],
        my_counter: ['count > 10'],
        response_time_news_page: ['p(95)<150', 'p(99)<200']
    }
}

let myCounter = new Counter('my_counter');
let newsPage = new Trend('response_time_news_page');


export default function ()
{
    let response = http.get(BASE_URL)
    myCounter.add(1);
    sleep(1)
    response = http.get(NEWS);
    newsPage.add(response.timings.duration);
    sleep(1)
}
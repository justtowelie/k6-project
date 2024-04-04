import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    vus: 1,
    duration: '30s',
}

export default function()
{
    http.get('https://test.k6.io');
    sleep(1);
    check(response, {
        'status is 200': (res) => res.status === 200,
        'page is startpage': (res) => res.body.includes('Collection of simple web-pages suitable for load testing')

    });
}
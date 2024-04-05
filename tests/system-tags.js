import http from 'k6/http';

export const options = {

    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}' : ['p(95)<1000'],
        'http_req_duration{status:201}' : ['p(95)<1000']
    }
}


    export default function()
    {
        http.get('https://run.mocky.io/v3/794606ae-6f81-4917-b341-a1336b469737');
        http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=2000ms');
    }

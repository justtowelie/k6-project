import http from 'k6/http';
import { check, sleep, group } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{expected_response:true}': ['p(95)<1000'],
        'group_duration{group:::Main page}': ['p(95)<8000'],
        'group_duration{group:::News page}': ['p(95)<6000'],
        'group_duration{group:::Main page::Assets}': ['p(95)<3000']
    }
}


export default function()
{
    // Syntax for a group
    group("Main page", function() {
        let response = http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=900ms')

        check(response,{'status is 200': (res) => res.status ===200});

        //Subgroup, assets within the page
        group("Assets", function() {
            http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=1000ms');
            http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=1000ms');
        })
    })



    group("News page", function() {
        http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=5000ms');
    })
    sleep(1);
}
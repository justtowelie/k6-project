import http from 'k6/http';
import {Counter} from 'k6/metrics';
import {check,sleep} from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<300'],
        // uses the custom tag for tracking.
        'http_req_duration{page:order}': ['p(95)<250'],
        http_errors: ['count==0'],
        'http_errors{page:order}' : ['count==0'],
        checks: ['rate>=0.99'],
        // uses the tag in the check
        'checks{page:order}' : ['rate>=0.99']
    }
}

let httpErrors = new Counter('http_errors')

export default function()
{

    let response = http.get('https://run.mocky.io/v3/794606ae-6f81-4917-b341-a1336b469737')

   if(response.error)
   {
    httpErrors.add(1);
   }

   check(response, {
    'status is 200': (res) => res.status === 200
   })

   // creates an order
   response = http.get('https://run.mocky.io/v3/c1d47bf6-7872-4685-bb30-116f2a463098?mocky-delay=2000ms',
   {
    // Creates a custom tag for tracking
    tags:{
        page: 'order'
    }
   })

   if(response.error)
   {
    // uses custom tag in the custom metric
    httpErrors.add(1, {page:'order'});
   }

   check(response, {
    'status is 201': (res) => res.status === 201
   },
   // adds the tag to the check
   {page: 'order'})

   sleep(1)
}
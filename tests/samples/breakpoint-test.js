import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    // One stage, long duration, high VUs
    // Something the application will never be able to handle.
    // Needs to be closely monitored, response times etc.
    // Does it crash? - write down number of users it crashed at.
    // load test > stress test and only then, breakpoint test.
    stages:[
        {duration: '2h',
         target: 10000},
    ],
}

export default function()
{
    http.get('https://test.k6.io');
    sleep(1);
}
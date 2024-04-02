import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    // ramps up VU's 1-100 for 5minutes for the ramp up. 
    // maintains 100 users for 30 minutes
    // ramps down VU's 100-1 for 5 minutes for the ramp down.
    // can increase load over time e.g. 10, 20, 30% to learn how the app is behaving.
    stages:[
        {duration: '5m',
         target: 100},
         {duration: '30m',
         target: 100},
         {duration: '5m',
         target: 0}
    ],
}

export default function()
{
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}
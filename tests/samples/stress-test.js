import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    // Run a stress test after a successful load test.
    stages:[
        {duration: '5m',
         target: 500},
         {duration: '15m',
         target: 1500},
         {duration: '5m',
         target: 500}
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
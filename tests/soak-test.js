import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    // Soaktest aka Endurance test.
    // Ensuring longevitiy of the app
    // What issues can it detect that a load test cant? :
    // Memory leaks, Disk space, DB, Caches -  issues that appear after extended periods of times.
    // Services may crash after long periods of time

    stages:[
        {duration: '5m',
         target: 1000},
         {duration: '24h',
         target: 1000},
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
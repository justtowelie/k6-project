import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    // To handle spikes in the app where the ramp up time is next-to non existent.
    // e.g. app was advertised on a commerical, users grab their phone and checkout the app
    // high influx of users, that will go down fairly quickly.
    // you can determine the number of spike users by looking at a stress test then x 4 it.
    // expect a crash. What happens after the crash, is there need for manual intervention?
    stages:[
        {duration: '2m',
         target: 10000},
         {duration: '1m',
         target: 0}
    ],
}

export default function()
{
    http.get('https://test.k6.io');
    sleep(1);
}
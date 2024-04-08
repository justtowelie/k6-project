import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
    vus: 1,
    duration: '5s'
}

// importing modules etc, brings in options variable. 
// Needs the export name convention for k6 to automatically know
console.log(' -- init stage --')


// Nothing will happen after until setUp is completed.
// We can make http calls and extract a variable and pass it to the default function.
export function setup()
{
    console.log('-- setup stage --');
    sleep(5)
    const data = { foo: 'bar' };
    return data;
}


// k6's reconsiged way of running the VU block, a default function.
export default function(data)
{
    console.log(' -- VU stage --');
    console.log(data)
    sleep(1)
}


// Standard teardown operations, can make http calls to clear out test data etc.
// will have access to variables, e.g. the data thats being setup
export function teardown(data)
{
    console.log('-- Teardown stage --')
}
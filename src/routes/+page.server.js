

import { createClient } from '$lib/prismicio';

 

export const prerender = true;

 

/** @type {import('./$types').PageServerLoad} */

export async function load() {

    const client = createClient();

    const document  = await client.getByUID('homepage', "arexan");

    

    return document.data

}
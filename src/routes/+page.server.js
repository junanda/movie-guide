import { API_KEY } from '$env/static/private'
import { fail } from '@sveltejs/kit';

// let data = {};

export function load({cookies}) {
    return {}
}

export const actions = {
    default: async ({request}) => {
        const dataF = await request.formData();
        const nameMovie = String(dataF.get('movie-name'))

        if(!nameMovie) {
            return fail(400, {nameMovie, missing: true})
        }
        const makeRequest = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=${nameMovie}`)
        const dataResponse = await makeRequest.json();
        console.log(dataResponse)
        return {data: dataResponse}
    }
}
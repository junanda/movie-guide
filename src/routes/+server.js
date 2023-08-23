import { API_KEY, TOKEN } from '$env/static/private'
import { fail, json } from '@sveltejs/kit';


export const POST = async ({request}) => {
    const formData = await request.formData();
    const querySearch = String(formData.get('movie-name'));

    if(!querySearch){
        return fail(400, {querySearch, missing: true})
    }

    const makeRequest = await fetch(`http://www.omdbapi.com/?i=${TOKEN}&apikey=${API_KEY}&t=${querySearch}`)
    const dataResponse = await makeRequest.json()
    return json(dataResponse)
}
//import newsMock from './mock.json';
import config from "../../config"

const { HOST } = config.API_SPOTIFY

const ARTISTS_URL = HOST + '/artists/' 

const callFetch = async (artist) => {
    let request = ""
    request = new Request(ARTISTS_URL + artist) 
    const res = await fetch(request)
    const artists = await res.json()
    console.log(artists)
    return artists
}


export default callFetch
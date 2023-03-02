import axios from "axios";
import { REACT_APP_RAPID_API_KEY } from '../config'

const BASE_URL = 'https://imdb8.p.rapidapi.com/auto-complete'

const options = {
    headers: {
        'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}
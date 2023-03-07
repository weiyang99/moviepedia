import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`)

    return data
}
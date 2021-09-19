import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const apiKey = '08d5cd2bb658d54cac679c6e24c23709'

const get = async (endpoint) => {
    const response = await axios.get(endpoint) 

	return response.data	
}

export const getCategory = async (category, page) => {
    return await get(`movie/${category}?api_key=${apiKey}&language=en-US&page=1&region=US&page=${page}`)
}

export const getGenres = async () => {
    return await get(`genre/movie/list?api_key=${apiKey}&language=en-US`)
}

export const getMoviesByGenre = async (id, page) => {
    return await get(`discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${id}&page=${page}`)
}

export const getMovieById = async (id) => {
    return await get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
} 

export const getActorById = async (id) => {
    return await get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
}

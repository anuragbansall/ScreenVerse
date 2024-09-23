import {addMovies, clearMovies} from '../reducers/movieSlice'
import axiosInstance from '../../utils/axios'

export const fetchMovie = (id) => async (dispatch) => {
    try {
        const detail = await axiosInstance.get(`/movie/${id}`)
        const externalid = await axiosInstance.get(`/movie/${id}/external_ids`)
        const recommendations = await axiosInstance.get(`/movie/${id}/recommendations`)
        const similar = await axiosInstance.get(`/movie/${id}/similar`)
        const videos = await axiosInstance.get(`/movie/${id}/videos`)
        const watchproviders = await axiosInstance.get(`/movie/${id}/watch/providers`)

        const movieData = {
            detail: detail.data,
            externalids: externalid.data,
            recommendations: recommendations.data,
            similar: similar.data,
            videos: videos.data,
            watchproviders: watchproviders.data.results.IN
        }

        dispatch(addMovies(movieData))   
    } catch (error) {
        console.log(error);
    }
}
import {addPersons, clearPersons} from '../reducers/personSlice'
import axiosInstance from '../../utils/axios'

export const fetchPerson = (id) => async (dispatch) => {
    try {
        const detail = await axiosInstance.get(`/person/${id}`)
        const externalid = await axiosInstance.get(`/person/${id}/external_ids`)
        const combinedCredits = await axiosInstance.get(`/person/${id}/combined_credits`)
        const tvCredits = await axiosInstance.get(`/person/${id}/tv_credits`)
        const movieCredits = await axiosInstance.get(`/person/${id}/movie_credits`)

        const personData = {
            detail: detail.data,
            externalids: externalid.data,
            combinedcredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
        }

        dispatch(addPersons(personData))   
    } catch (error) {
        console.log(error);
    }
}
import {addTvs, clearTvs} from '../reducers/tvSlice'
import axiosInstance from '../../utils/axios'

export const fetchTv = (id) => async (dispatch) => {
    try {
        const detail = await axiosInstance.get(`/tv/${id}`)
        const externalid = await axiosInstance.get(`/tv/${id}/external_ids`)
        const recommendations = await axiosInstance.get(`/tv/${id}/recommendations`)
        const similar = await axiosInstance.get(`/tv/${id}/similar`)
        const videos = await axiosInstance.get(`/tv/${id}/videos`)
        const watchproviders = await axiosInstance.get(`/tv/${id}/watch/providers`)

        const tvData = {
            detail: detail.data,
            externalids: externalid.data,
            recommendations: recommendations.data,
            similar: similar.data,
            videos: videos.data,
            watchproviders: watchproviders.data.results.IN
        }

        dispatch(addTvs(tvData))   
    } catch (error) {
        console.log(error);
    }
}
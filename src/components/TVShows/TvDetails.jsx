import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTv } from "../../store/actions/tvAction";
import { clearTvs } from "../../store/reducers/tvSlice";
import { useEffect } from "react";
import DetailsPage from "../Common/DetailsPage";

function TvDetails() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.tvSlice)
  console.log(data);
  

  useEffect(() => {
    dispatch(fetchTv(id))

    return () => {
      dispatch(clearTvs())
    }
  }, [id])

  if(!data) return <h2>Loading...</h2>

  return (
    <div>
      <DetailsPage
        detail = {data.detail}
        externalids = {data.externalids}
        recommendations = {data.recommendations}
        watchproviders = {data.watchproviders}
        similar = {data.similar}
        videos = {data.videos}
      />
    </div>
  )
}

export default TvDetails
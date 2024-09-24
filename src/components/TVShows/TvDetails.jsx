import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { fetchTv } from "../../store/actions/tvAction";
import { clearTvs } from "../../store/reducers/tvSlice";
import { useEffect } from "react";
import DetailsPage from "../Common/DetailsPage";
import Loading from "../Common/Loading";

function TvDetails() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.tvSlice)

  useEffect(() => {
    dispatch(fetchTv(id))

    return () => {
      dispatch(clearTvs())
    }
  }, [id])

  if(!data) return <Loading />

  return (
    <div className="relative">
      <Outlet />
      <DetailsPage
        detail = {data.detail}
        externalids = {data.externalids}
        recommendations = {data.recommendations}
        watchproviders = {data.watchproviders}
        similar = {data.similar}
        videos = {data.videos}
        title="tv"
      />
    </div>
  )
}

export default TvDetails
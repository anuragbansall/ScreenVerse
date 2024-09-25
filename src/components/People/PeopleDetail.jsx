import React, { useEffect } from "react";
import CardsScrollContainer from "../Common/CardsScrollContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Common/Loading";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { fetchPerson } from "../../store/actions/personAction";
import { clearPersons } from "../../store/reducers/personSlice";
import { useNavigate, useParams } from "react-router-dom";

function PeopleDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPerson(id));

    return () => dispatch(clearPersons());
  }, []);

  const { data } = useSelector((state) => state.personSlice);

  const navigate = useNavigate();

  if (!data) return <Loading />;

  return (
    <div className="h-screen w-full overflow-y-auto bg-zinc-900 text-white py-6 px-16">
      <div className="2xl:container mx-auto">
        <span className="text-2xl cursor-pointer" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
        </span>
        <div className="flex gap-16 mt-6">
          <div className="w-fit max-w-[10rem] shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/original${data.detail.profile_path}`}
              className="h-[15rem] shadow-xl"
            />
            <hr className="my-8" />
            <span className="flex items-center justify-center gap-4">
              {[
                {
                  icon: <FaEarthAfrica />,
                  navigateTo: `https://www.wikidata.org/wiki/${data.externalids.wikidata_id}`,
                },
                {
                  icon: <FaFacebook />,
                  navigateTo: `https://www.facebook.com/${data.externalids.facebook_id}`,
                },
                {
                  icon: <FaInstagram />,
                  navigateTo: `https://www.instagram.com/${data.instagram_id}`,
                },
                {
                  icon: <FaXTwitter />,
                  navigateTo: `https://x.com/${data.externalids.twitter_id}`,
                },
              ].map((item, index) => (
                <a key={index} href={item.navigateTo} className="text-xl">
                  {item.icon}
                </a>
              ))}
            </span>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Personal Info</h2>
              <div>
                {[
                  {
                    title: "Known For",
                    desc: data.detail.known_for_department || "No Information",
                  },
                  {
                    title: "Gender",
                    desc:
                      data.detail.gender === 1
                        ? "Female"
                        : data.detail.gender === 2 ? "Male" : "Not specified"  || "No Information",
                  },
                  {
                    title: "Birthday",
                    desc: data.detail.birthday || "No Information",
                  },
                  {
                    title: "Deathday",
                    desc: data.detail.deathday || "No Information",
                  },
                  {
                    title: "Place of Birth",
                    desc: data.detail.place_of_birth || "No Information",
                  },
                  {
                    title: "Also Known As",
                    desc:
                      data.detail.also_known_as.join(", ") || "No Information",
                  },
                ].map((item, index) => (
                  <div key={index} className="my-4">
                    <h3 className="text-xl font-semibold my-1">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-[3rem] font-semibold">{data.detail.name}</h2>
            <h3 className="text-2xl font-semibold italic my-4">Biography</h3>
            <p>{data.detail.biography || "No Information"}</p>
            <h3 className="text-2xl font-semibold mt-8">Known For</h3>
            <div className="flex">
              <div className="w-0 flex-grow mx-auto">
                <CardsScrollContainer
                  data={data.combinedcredits.cast || data.movieCredits.cast}
                  title={data.movieCredits.cast ? "movie" : "tv"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleDetail;

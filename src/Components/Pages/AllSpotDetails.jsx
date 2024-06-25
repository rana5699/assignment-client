import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ViewDetails from "./ViewDetails";

const AllSpotDetails = () => {
  const { id } = useParams();
  const [dataInfo, setDataInfo] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-server-side-alpha.vercel.app/alltouristspots/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching spots:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div>
        <ViewDetails
          imageUrl={dataInfo?.imageUrl}
          touristSpotName={dataInfo?.touristSpotName}
          countryName={dataInfo?.countryName}
          location={dataInfo?.location}
          seasonality={dataInfo?.seasonality}
          shortDescription={dataInfo?.shortDescription}
          totalVisitorsPerYear={dataInfo?.totalVisitorsPerYear}
          travelTime={dataInfo?.travelTime}
          averageCost={dataInfo?.averageCost}
        />
      </div>
    </div>
  );
};

export default AllSpotDetails;

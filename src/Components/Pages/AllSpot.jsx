/* eslint-disable react/prop-types */
import HelmetTitle from "../Loader/HelmetTitle";
import DemoCard from "./DemoCard";

const AllSpot = ({ item }) => {
  const {
    averageCost,
    imageUrl,
    seasonality,
    touristSpotName,
    totalVisitorsPerYear,
    travelTime,
    _id,
  } = item;

  return (
    <div>
      <HelmetTitle title="All Spots" />
      <DemoCard
        imageUrl={imageUrl}
        touristSpotName={touristSpotName}
        seasonality={seasonality}
        totalVisitorsPerYear={totalVisitorsPerYear}
        travelTime={travelTime}
        averageCost={averageCost}
        path={`/allspots/${_id}`}
      />
    </div>
  );
};

export default AllSpot;

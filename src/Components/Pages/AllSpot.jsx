/* eslint-disable react/prop-types */
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
    <DemoCard
      imageUrl={imageUrl}
      touristSpotName={touristSpotName}
      seasonality={seasonality}
      totalVisitorsPerYear={totalVisitorsPerYear}
      travelTime={travelTime}
      averageCost={averageCost}
      path={`/allspots/${_id}`}
    />
  );
};

export default AllSpot;

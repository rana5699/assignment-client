import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import AllSpot from "../Pages/AllSpot";
const AllSpotsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("https://assignrmnt-server.vercel.app/alltouristspots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching spots:", err);
        setLoading(false);
      });
  }, []);

  const sortSpotsByCost = () => {
    const sortByCost = [...spots].sort((a, b) => {
      return a.averageCost - b.averageCost;
    });
    setSpots(sortByCost);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="mx-auto text-center my-5">
        <button className="btn btn-outline" onClick={sortSpotsByCost}>
          Sort By Cost{" "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 p-x-5">
        {spots &&
          spots.map((item) => <AllSpot key={item._id} item={item}></AllSpot>)}
      </div>
    </div>
  );
};

export default AllSpotsContainer;

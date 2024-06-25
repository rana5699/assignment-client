import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";
import Loader from "../Loader/Loader";
import Container from "../Pages/Container";

const TouristContainer = () => {
  const [loading, setLoading] = useState(true);

  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("https://assignment-server-side-alpha.vercel.app/touristspot")
      .then((res) => res.json())
      .then((spots) => {
        setTouristSpots(spots);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tourist spots:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Container
        title="Tourist Spots"
        description="Traveling is one of the most enriching experiences one can have. It
            opens up a world of new cultures, cuisines, and breathtaking
            landscapes. Tourist spots around the globe attract millions of
            visitors every year, each offering unique experiences and memories
            to cherish."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        {touristSpots &&
          touristSpots.map((spot) => (
            <TouristSpot key={spot._id} spot={spot} />
          ))}
      </div>
    </div>
  );
};

export default TouristContainer;

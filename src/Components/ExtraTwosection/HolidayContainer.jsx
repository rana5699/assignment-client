import { useEffect, useState } from "react";
import Container from "../Pages/Container";
import HolidayPackages from "./HolidayPackages";
import Loader from "../Loader/Loader";

const HolidayContainer = () => {
  const [offers, setOffers] = useState(null);
  console.log("offers:", offers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignrmnt-server.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-10">
      <Container
        title="Last Minutes Offers"
        description="These offers are commonly associated with travel and tourism, such as discounted flights, hotel rooms, vacation packages, or event tickets that need to be sold quickly before a specific date or deadline. "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-5 ">
        {offers ? (
          offers.map((item) => <HolidayPackages key={item?._id} item={item} />)
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
};

export default HolidayContainer;

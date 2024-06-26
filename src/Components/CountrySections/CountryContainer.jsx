import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "../Loader/Loader";
import Container from "../Pages/Container";

const CountryContainer = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await fetch(
          "https://assignrmnt-server.vercel.app/countrynames"
        );
        const data = await res.json();
        setNames(data);
      } catch (error) {
        console.error("Error fetching country names:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNames();
  }, []);

  //   loading && <Loader />

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-5">
      <Container
        title="Destination Countries"
        description="These countries are often sought after for their economic opportunities, safety, quality of life, or cultural attractions. They are popular locations for individuals seeking employment, education, better living conditions, or simply as travel destinations. "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
        {names &&
          names.map((item) => <CountryCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default CountryContainer;

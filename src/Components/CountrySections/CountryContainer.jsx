import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "../Loader/Loader";
import Container from "../Pages/Container";

const CountryContainer = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/countrynames")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
        setLoading(false);
      });
  }, []);

  //   loading && <Loader />

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-5">
      <Container
        title="Destination Countries"
        description="Traveling is one of the most enriching experiences one can have. It
            opens up a world of new cultures, cuisines, and breathtaking
            landscapes. Tourist spots around the globe attract millions of
            visitors every year, each offering unique experiences and memories
            to cherish."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
        {names &&
          names.map((item) => <CountryCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default CountryContainer;
import { useParams } from "react-router-dom";
import DemoCard from "../Pages/DemoCard";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorPage from "../Pages/ErrorPage";

const CountryMatch = () => {
  const { countryname } = useParams();
  const nameConvention = countryname.toLocaleLowerCase();
  console.log("nameConvention:", nameConvention);

  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://assignrmnt-server.vercel.app/countryname/${nameConvention}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCountry(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, [nameConvention]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage status={error} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
      {country.map((item) => (
        <DemoCard
          key={item._id}
          touristSpotName={item?.touristSpotName}
          countryName={item?.countryName}
          shortDescription={item?.shortDescription}
          location={item?.location}
          seasonality={item?.seasonality}
          averageCost={item?.averageCost}
          path={`/allspots/${item?._id}`}
        />
      ))}
    </div>
  );
};

export default CountryMatch;

/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../AuthProvider/ThemeProvider";

const CountryCard = ({ item }) => {
  const { description, countryImage, countryName } = item;
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="my-5">
      <Link to={`/bycoutryname/${countryName}`}>
        {" "}
        <Card className="w-full  overflow-hidden">
          <CardHeader
            floated={false}
            shadow={true}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={countryImage}
              alt={countryName}
              className="w-full h-[350px] md:h-500[450px] lg:h-[500px]"
            />
          </CardHeader>
          <CardBody
            className={`font-normal ${
              isDark ? "bg-gray-600 text-white" : "bg-cyan-700 text-white"
            }`}
          >
            <Typography variant="h4" color="blue-gray">
              {countryName}
            </Typography>
            <Typography variant="lead" className="mt-2 font-normal">
              {description.length > 150
                ? description.slice(0, 150)
                : description}
              ...
            </Typography>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CountryCard;

/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import PrimaryBtn from "../UsersAuthorize/PrimaryBtn";
import { Typewriter } from "react-simple-typewriter";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { SiSession } from "react-icons/si";
import { Link } from "react-router-dom";

const DemoCard = ({
  imageUrl,
  touristSpotName,
  seasonality,
  totalVisitorsPerYear,
  travelTime,
  averageCost,
  path,
  countryName,
  location,
  shortDescription,
}) => {
  return (
    <div>
      <Card
        color="gray"
        variant="gradient"
        className="w-full mt-3 mb-5 p-3 bg-gray-200 text-black"
      >
        {imageUrl ? (
          <CardHeader
            shadow={true}
            floated={true}
            className="m-0 w-full shrink-0 rounded-r-none mb-5"
          >
            <img
              src={imageUrl}
              alt={touristSpotName}
              className="h-[350px] lg:h-[500px] w-full object-cover"
            />
          </CardHeader>
        ) : (
          ""
        )}
        <CardBody className="p-0 mx-auto md:mx-0">
          <Typography className="font-normal">
            <div className=" p-2">
              <h2 className="text-3xl font-bold text-center  text-cyan-500 font-ubuntu">
                <Typewriter
                  words={[touristSpotName]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
          </Typography>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle className="text-xl text-cyan-500" />
              </span>
              {countryName ? (
                <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                  {" "}
                  <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                    <p>Countryname :</p>

                    <p className="text-gray-600 font-extrabold text-lg uppercase">
                      {countryName}
                    </p>
                  </div>
                </Typography>
              ) : (
                <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                  <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                    <p>Total Visitors Per Year :</p>
                    <MdGroupAdd />
                    <p className="text-gray-600 font-extrabold text-lg">
                      {totalVisitorsPerYear}
                    </p>
                  </div>
                </Typography>
              )}
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle className="text-xl text-cyan-500" />
              </span>
              {location ? (
                <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                  {" "}
                  <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                    <p>Location :</p>

                    <p className="text-gray-600 font-extrabold text-lg">
                      {location}
                    </p>
                  </div>
                </Typography>
              ) : (
                <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                  {" "}
                  <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                    <p>Travel Day :</p>
                    <FaCalendarAlt />
                    <p className="text-gray-600 font-extrabold text-lg">
                      {travelTime} Days
                    </p>
                  </div>
                </Typography>
              )}
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle className="text-xl text-cyan-500" />
              </span>
              <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                  <p>Average Cost :</p>
                  <FaMoneyCheckDollar />
                  <p className="text-gray-600 font-extrabold text-lg">
                    $ {averageCost}
                  </p>
                </div>
              </Typography>
            </li>

            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle className="text-xl text-cyan-500" />
              </span>
              <Typography className="font-extrabold text-cyan-800 font-ubuntu">
                {" "}
                <div className="flex items-center gap-2 justify-center flex-wrap text-lg">
                  <p>Seasonality :</p>
                  <SiSession />
                  <p className="text-gray-600 font-extrabold text-lg">
                    {seasonality}
                  </p>
                </div>
              </Typography>
            </li>
          </ul>

          {shortDescription ? (
            <Typography className="font-extrabold text-cyan-800 font-ubuntu">
              {" "}
              <div className=" text-lg mt-5">
                <p>
                  Description :{" "}
                  <span className="text-black">
                    {shortDescription.length > 100
                      ? shortDescription.slice(0, 100) + "..."
                      : shortDescription}
                  </span>
                </p>
              </div>
            </Typography>
          ) : (
            ""
          )}
        </CardBody>
        <CardFooter className="mt-1 p-0">
          <Link to={path}>
            <PrimaryBtn text="View Details" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DemoCard;

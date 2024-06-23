/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PrimaryBtn from "../UsersAuthorize/PrimaryBtn";
import { MdGroupAdd } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { SiSession } from "react-icons/si";

const ViewDetails = ({
  imageUrl,
  touristSpotName,
  countryName,
  location,
  seasonality,
  shortDescription,
  totalVisitorsPerYear,
  travelTime,
  averageCost,
}) => {
  return (
    <div>
      <div className="w-full md:w-10/12 mx-auto my-5  p-5">
        <Card className="w-full grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full shrink-0 rounded-r-none"
          >
            <img
              src={imageUrl}
              alt={touristSpotName}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {countryName}
            </Typography>

            <Typography
              variant="h4"
              color=""
              className="text-cyan-500 font-ubuntu"
            >
              {touristSpotName}
            </Typography>
            <Typography className="my-3  text-gray-400 font-bold flex gap-2 justify-around md:justify-between flex-wrap items-center">
              <div className="flex gap-2 items-center">
                <IoLocation className="text-2xl" />
                {location}
              </div>

              <div className="flex gap-2 items-center">
                <SiSession className="text-2xl" />
                {seasonality}
              </div>
            </Typography>
            <Typography color="gray" className="mb-3 font-normal font-lora">
              {shortDescription}
            </Typography>

            <Typography variant="h6" color="gray" className="mb-4 ">
              <div
                className="bg-cyan-200 p-3 w-fit shadow-2xl  font-bold flex justify-center items-center gap-3 mx-auto md:mx-0"
                style={{ borderRadius: "73% 27% 27% 73% / 45% 48% 52% 55% " }}
              >
                <MdGroupAdd className="text-xl" />
                <p className=" text-center">
                  Total Visitors per year :{" "}
                  <span
                    className="
                text-gray-500 font-extrabold font-ubuntu"
                  >
                    {" "}
                    {totalVisitorsPerYear}
                  </span>
                </p>
              </div>
            </Typography>
            <Typography variant="h6" color="gray" className="mb-4 ">
              <div
                className="bg-cyan-200 p-3 w-fit shadow-2xl  font-bold flex justify-center items-center gap-3 mx-auto md:mx-0"
                style={{ borderRadius: "73% 27% 27% 73% / 45% 48% 52% 55% " }}
              >
                <FaBusinessTime className="text-xl" />
                <p className=" text-center">
                  Travel Time :{" "}
                  <span
                    className="
                text-gray-500 font-extrabold font-ubuntu"
                  >
                    {" "}
                    {travelTime} Days
                  </span>
                </p>
              </div>
            </Typography>
            <Typography variant="h6" color="gray" className="mb-4 ">
              <div
                className="bg-cyan-200 p-3 w-fit shadow-2xl  font-bold flex justify-center items-center gap-3 mx-auto md:mx-0"
                style={{ borderRadius: "73% 27% 27% 73% / 45% 48% 52% 55% " }}
              >
                <FaMoneyCheckDollar className="text-xl" />
                <p className=" text-center">
                  Avarage Cost :
                  <span
                    className="
                text-gray-500 font-extrabold font-ubuntu"
                  >
                    {" "}
                    $ {averageCost}
                  </span>
                </p>
              </div>
            </Typography>
            <PrimaryBtn text="Add Wishlist" />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ViewDetails;

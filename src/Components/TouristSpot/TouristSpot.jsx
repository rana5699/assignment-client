/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PrimaryBtn from "../UsersAuthorize/PrimaryBtn";
import { Typewriter } from "react-simple-typewriter";

const TouristSpot = ({ spot }) => {
  const { imageUrl, touristSpotName, shortDescription, _id, averageCost } =
    spot;

  return (
    <div className="card   shadow-xl my-5 border border-cyan-500">
      <div className="card-body bg-gray-100 rounded-t-xl">
        <h2 className="text-2xl font-bold text-center  text-cyan-500 font-ubuntu">
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
      <figure className="">
        <img
          className="w-full h-[350px] md:h-500[450px] lg:h-[500px]"
          src={imageUrl}
          alt={touristSpotName}
        />
      </figure>

      <div className=" p-3 ">
        <p className="text-lg text-left font-lora">
          {shortDescription.length > 150
            ? shortDescription.slice(0, 150)
            : shortDescription}
          .....
        </p>
      </div>
      <div className="border-t border-cyan-500 p-5 text-left">
        <div
          className="bg-cyan-500 p-3 w-fit mx-auto shadow-2xl text-white font-bold"
          style={{ borderRadius: "73% 27% 27% 73% / 45% 48% 52% 55% " }}
        >
          <p className="text-xl text-center">
            Start From <span> $ {averageCost} </span>
          </p>
        </div>
        <Link to={`/touristspots/${_id}`} state={spot}>
          <PrimaryBtn text="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default TouristSpot;

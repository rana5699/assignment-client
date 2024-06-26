/* eslint-disable react/prop-types */
import { BsClock, BsPeople } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

("react-icons/fa6");

const HolidayPackages = ({ item }) => {
  const {
    countryImage,
    countryName,
    days,
    discountPrice,
    location,
    regularPrice,
    save,
    shortDescription,
  } = item;
  return (
    <div className="mt-5 ">
      <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg  w-full hover:shadow-xl bg-cyan-700 text-white mx-auto">
        <div className="m-2 h-3/6 rounded-lg relative   blur-sm hover:blur-none hover:transition hover:duration-300 ">
          <img
            className="w-full rounded-t-2xl h-[350px] md:h-[450px] lg:h-[500px]"
            src={countryImage}
            alt={countryName}
          />
        </div>
        <div>
          <div className="bg-cyan-400  font-extrabold text-lg p-2 w-32 -rotate-90 absolute top-10">
            <p>
              Save <span className="text-green-800"> {save} </span> %{" "}
            </p>
          </div>
        </div>

        <div className="px-5 pt-2 flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-semibold">{countryName}</h2>
            <div className="flex gap-5">
              <h2 className="font-bold text-black text-lg ">
                {" "}
                Regular : <strike>$ {regularPrice}</strike>{" "}
              </h2>
              <h2 className="font-bold text-white text-lg ">
                {" "}
                Now : $ {discountPrice}{" "}
              </h2>
            </div>
          </div>
          <div className="text-left my-3">
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="bg-cyan-500 hover:bg-cyan-900 text-left flex justify-between py-4 px-5">
          <div className="text-lg font-bold flex items-center gap-3">
            <BsClock className="text-2xl " />
            <p>{days} Days</p>
          </div>
          <div className="text-lg font-bold flex items-center gap-3">
            <BsPeople className="text-2xl " />
            <p>18+</p>
          </div>
          <div className="text-lg font-bold flex items-center gap-3">
            <GrLocation className="text-2xl " />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;

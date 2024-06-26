import { BsClock, BsPeople } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

("react-icons/fa6");

const HolidayPackages = () => {
  return (
    <div className="mt-10">
      <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg  w-full hover:shadow-xl bg-cyan-700 text-white">
        <div className="m-2 h-3/6 rounded-lg relative   blur-sm hover:blur-none hover:transition hover:duration-300 ">
          <img
            className="w-full rounded-t-2xl"
            src="https://i.ibb.co/0YFXV4S/iftekhar-nibir-xo-Np1-Jmijk-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="bg-cyan-400  font-extrabold text-lg p-2 w-32 -rotate-90 absolute top-10">
            <p>Save 50% </p>
          </div>
        </div>

        <div className="px-5 pt-2 flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-semibold">Bangladesh</h2>
            <div className="flex gap-5">
              <h2 className="font-bold text-black text-lg ">
                {" "}
                Regular : <strike>$ 550</strike>{" "}
              </h2>
              <h2 className="font-bold text-white text-lg "> Now : $ 500 </h2>
            </div>
          </div>
          <div className="text-left my-3">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
            </p>
          </div>
        </div>
        <div className="bg-cyan-500 hover:bg-cyan-900 text-left flex justify-between py-4 px-5">
          <div className="text-lg font-bold flex items-center gap-3">
            <BsClock className="text-2xl " />
            <p>5 Days</p>
          </div>
          <div className="text-lg font-bold flex items-center gap-3">
            <BsPeople className="text-2xl " />
            <p>18+</p>
          </div>
          <div className="text-lg font-bold flex items-center gap-3">
            <GrLocation className="text-2xl " />
            <p>Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;

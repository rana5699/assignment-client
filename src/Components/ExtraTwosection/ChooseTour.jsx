import { FaMountainSun, FaPlaneLock } from "react-icons/fa6";
import { GiCycling } from "react-icons/gi";
import { MdOutlineTsunami } from "react-icons/md";

const ChooseTour = () => {
  return (
    <div className="mt-8 ">
      <div
        className="flex justify-center items-center h-[500px]  rounded-t-3xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qMDTV1T/image-from-rawpixel-id-437302-jpeg.jpg)",
          //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="text-white px-8">
          <h1 className="mb-5 text-5xl font-bold">Choose Tour</h1>
          <p className="mb-7 text-lg">
            Find your next travel adventure and make it memorable. Explore
            wildlife, enjoy seaside or book a cruise tour. Check out our popular
            destinations.
          </p>
          <div className="">
            <div className="flex justify-center items-center gap-x-20 mx-auto">
              <div className="text-white cursor-pointer">
                <FaPlaneLock className="text-5xl text-white  mx-auto mb-3" />
                <p className="text-xl">Self-Guided</p>
              </div>
              <div className="text-white cursor-pointer">
                <GiCycling className="text-5xl text-white  mx-auto mb-3" />
                <p className="text-xl">Adventure</p>
              </div>
              <div className="text-white cursor-pointer">
                <MdOutlineTsunami className="text-5xl text-white  mx-auto mb-3" />
                <p className="text-xl">Seaside</p>
              </div>
              <div className="text-white cursor-pointer">
                <FaMountainSun className="text-5xl text-white  mx-auto mb-3" />
                <p className="text-xl">Wildlife</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTour;

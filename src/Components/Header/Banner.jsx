// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

// Initialize AOS
AOS.init();

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("banner:", banner);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          "https://assignrmnt-server.vercel.app/countrynames"
        );
        const data = await res.json();
        setBanner(data);
      } catch (error) {
        console.error("Error loading the banner:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBanner();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-5"
    >
      {banner &&
        banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative text-lg bg-gray-100 flex justify-center items-center rounded-lg"
              style={{
                backgroundImage: `url(${item.countryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative text-white z-10" data-aos="fade-zoom-in">
                <Link to={`/bycoutryname/${item?.countryName}`}>
                  <div className="hero border-2 rounded-md border-cyan-500 my-5 cursor-pointer">
                    <div className="hero-content text-center">
                      <div className="max-w-xl">
                        <h1 className="text-6xl font-bold font-marcellus text-cyan-500 font-ubuntu">
                          {item?.countryName}
                        </h1>
                        <p className="py-6 font-jost">
                          {item?.description.length > 200
                            ? item?.description.slice(0, 200)
                            : item?.description}
                          ...
                        </p>
                        <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-cyan-400 shadow-[inset_0px_-2px_0px_1px_#AB916C] group hover:bg-cyan-400 transition duration-300 ease-in-out">
                          <Link
                            to="/booking"
                            className="font-medium text-[#333] group-hover:text-white font-jost"
                          >
                            Stay Booking
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banner;

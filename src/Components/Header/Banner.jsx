// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const Banner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("silder.json")
      .then((response) => response.json())
      .then((data) => {
        setBanner(data);
      })
      .catch((error) => {
        console.error("Error loading the banner:", error);
      });
  }, []);

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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-5"
    >
      {banner &&
        banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative text-lg bg-gray-100 flex justify-center items-center rounded-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative text-white z-10" data-aos="fade-zoom-in">
                <div className="hero border-2 rounded-md border-[#AB916C] my-5">
                  <div className="hero-content text-center">
                    <div className="max-w-xl">
                      <h1 className="text-5xl font-bold font-marcellus">
                        {item?.title}
                      </h1>
                      <p className="py-6 font-jost">{item?.subTitle}</p>
                      <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[rgb(171,145,108)] shadow-[inset_0px_-2px_0px_1px_#AB916C] group hover:bg-[#AB916C] transition duration-300 ease-in-out">
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
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banner;

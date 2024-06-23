import { useContext } from "react";
import { ThemeContext } from "../../AuthProvider/ThemeProvider";

/* eslint-disable react/prop-types */
const Container = ({ title, description }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="">
      <div className=" px-5">
        <h3 className="text-3xl text-cyan-500 font-bold font font-ubuntu">
          {title}
        </h3>
        <div
          className={` p-5 my-3 ${
            isDark ? "bg-black text-white" : "bg-cyan-100"
          }`}
          style={{ borderRadius: "22% 28% 16% 24% / 59% 53% 47% 41% " }}
        >
          <p className="font-lora">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Container;

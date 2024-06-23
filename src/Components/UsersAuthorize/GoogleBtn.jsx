import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin } = useContext(AuthContext);

  const loginWithGooogle = () => {
    googleLogin()
      .then((result) => {
        console.log("result:", result);
        toast.success("Congratulations ! You are our new member");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
        toast.warn(errorMessage);
      });
  };

  return (
    <div className="my-3">
      <button
        onClick={loginWithGooogle}
        className="btn btn-outline w-full border-2 border-cyan-500 hover:bg-gradient-to-tr from-cyan-600 to-cyan-400 hover:border-none transition-all duration-500 ease-in shadow-lg"
      >
        <FaGoogle className="text-xl" />
        <span className="ml-8 text-lg">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleBtn;

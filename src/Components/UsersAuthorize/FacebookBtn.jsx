import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const FacebookBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { facebookLogin } = useContext(AuthContext);

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log("result:", result.user);
        toast.success("Login Successfull");
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
        onClick={handleFacebookLogin}
        className="btn btn-outline w-full border-2 border-cyan-500 hover:bg-gradient-to-tr from-cyan-600 to-cyan-400 hover:border-none transition-all duration-500 ease-in shadow-2xl"
      >
        <FaFacebook className="text-xl" />
        <span className="ml-8 text-lg">Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default FacebookBtn;

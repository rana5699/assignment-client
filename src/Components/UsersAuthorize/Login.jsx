import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";
import FacebookBtn from "./FacebookBtn";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login(email, password)
      .then((result) => {
        console.log("result:", result.user);
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.warn(errorMessage);
      });
  };

  return (
    <div className=" p-5 h-screen">
      <div className="relative flex w-full md:w-8/12 lg:w-2/4 flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-2xl my-20 mx-auto">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign In
          </h3>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <form onSubmit={handleLogin}>
            <div className="mt-5">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                ref={emailRef}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    ref={passwordRef}
                    required
                    placeholder="Password"
                    type="Password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="password"
                  />
                </div>
              </div>
            </div>

            <div className="text-right mb-4">
              <Link className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer">
                Forgot Password?
              </Link>
            </div>

            <div className="px-6 pt-0">
              <button
                type="submit"
                className="block mt-3 w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="px-6  pt-0">
            <GoogleBtn />
            <FacebookBtn />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            <p className="text-lg text-gray-600">
              No account yet?
              <Link
                to="/register"
                className="underline text-lg font-bold text-cyan-500"
              >
                Create one
              </Link>
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

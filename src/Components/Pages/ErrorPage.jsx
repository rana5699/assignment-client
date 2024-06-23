/* eslint-disable react/prop-types */
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ status }) => {
  const error = useRouteError();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-200 to-red-300 flex items-center justify-center">
        <div
          className="relative bg-[#eeeaee] p-16  text-center shadow-2xl"
          style={{ borderRadius: "20% 62% 69% 10% / 55% 14% 10% 30% " }}
        >
          {" "}
          <h2 className="mt-4 text-4xl font-bold text-gray-800">Oops!</h2>
          <h1 className="text-9xl font-bold text-purple-600">
            {error?.status || status}
          </h1>
          <p className="mt-3 text-xl text-black">
            Sorry, the page you are looking for does not exist.
          </p>
          <p className="mt-3 text-xl text-gray-600">{error?.error?.message}</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-purple-600 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-purple-700 uppercase font-bold"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

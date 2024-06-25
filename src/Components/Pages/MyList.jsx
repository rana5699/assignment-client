import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import ListTable from "./ListTable";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const [isLoading, setIsLoading] = useState(true);
  const [mySpots, setMySpots] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-server-side-alpha.vercel.app/alltouristspotss/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMySpots(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsLoading(false);
      });
  }, [userEmail]);

  const handleDelete = (id) => {
    fetch(
      `https://assignment-server-side-alpha.vercel.app/alltouristspot/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => {
        const updatedSpots = mySpots.filter((spot) => spot._id !== id);
        console.log("updatedSpots:", updatedSpots);
        setMySpots(updatedSpots);
      })
      .catch((err) => console.log("Delete error:", err));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full px-3 md:w-10/12 mx-auto my-5  p-2 rounded-md">
      {mySpots.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-gray-600 font-bold">
              <tr>
                <th>Spots</th>
                <th>Average Cost</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>

            {mySpots &&
              mySpots.map((mySpot) => (
                <ListTable
                  key={mySpot._id}
                  mySpot={mySpot}
                  onDelete={handleDelete}
                />
              ))}
          </table>
        </div>
      ) : (
        <div className="mx-auto text-center">
          <p className="text-cyan-700 font-bold ">
            Dear{" "}
            <span className="text-gray-700 font-extrabold text-lg ">
              {" "}
              {user?.displayName}
            </span>{" "}
            so far you haven not sent any of your favorite spots to us! You
            share your favorite places with us from here.
          </p>
          <Link
            to="/addspot"
            className="mt-6 inline-block bg-purple-600 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-purple-700 uppercase font-bold hover:underline"
          >
            Add Here
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyList;

import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateSpot = () => {
  const { id } = useParams();
  const preData = useLocation().state.mySpot; // from useLocatioon hook

  console.log("preData:", preData);

  const {
    imageUrl,
    touristSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = preData;

  const [image, setImage] = useState(preData ? imageUrl : "");
  const [spotName, setSpotName] = useState(preData ? touristSpotName : "");
  const [country, setCountry] = useState(preData ? countryName : "");
  const [spotLocation, setSpotLocation] = useState(preData ? location : "");
  const [desciption, setDesciption] = useState(preData ? shortDescription : "");
  const [cost, setCost] = useState(preData ? averageCost : "");
  const [seasion, setSeasion] = useState(preData ? seasonality : "");
  const [time, setTime] = useState(preData ? travelTime : "");
  const [totalVisitors, setTotalVisitors] = useState(
    preData ? totalVisitorsPerYear : ""
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    const imageUrl = e.target.imageUrl.value;
    const touristSpotName = e.target.touristSpotName.value;
    const countryName = e.target.countryName.value.toLowerCase();
    const location = e.target.location.value;
    const shortDescription = e.target.shortDescription.value;
    const averageCost = e.target.averageCost.value;
    const seasonality = e.target.seasonality.value;
    const travelTime = e.target.travelTime.value;
    const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;

    const updatedSpot = {
      imageUrl,
      touristSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
    };

    fetch(`https://assignrmnt-server.vercel.app/updatespot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Update Your Spot ");
        console.log("data:", data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center p-5 w-full md:w-11/12 mx-auto rounded-md my-5">
        <div
          className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-8/12 lg:w-2/4"
          style={{ borderRadius: "13% 22% 14% 14% / 25% 22% 44% 26% " }}
        >
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased text-center">
              Please Update Your Spot Informations
            </h3>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="touristSpotName"
              >
                Tourist Spot Name
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="touristSpotName"
                name="touristSpotName"
                value={spotName}
                onChange={(e) => setSpotName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="countryName">
                Country Name
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="countryName"
                name="countryName"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="location">
                Location
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="location"
                name="location"
                value={spotLocation}
                onChange={(e) => setSpotLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <textarea
                className="w-full p-2 border border-cyan-400 rounded"
                id="shortDescription"
                name="shortDescription"
                value={desciption}
                onChange={(e) => setDesciption(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="averageCost">
                Average Cost
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="number"
                id="averageCost"
                name="averageCost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="seasonality">
                Seasonality
              </label>
              <select
                className="w-full p-2 border border-cyan-400 rounded"
                id="seasonality"
                name="seasonality"
                value={seasion}
                onChange={(e) => setSeasion(e.target.value)}
              >
                <option value="">Select seasonality</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="travelTime">
                Travel Time (days)
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="number"
                id="travelTime"
                name="travelTime"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="totalVisitorsPerYear"
              >
                Total Visitors Per Year
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="number"
                id="totalVisitorsPerYear"
                name="totalVisitorsPerYear"
                value={totalVisitors}
                onChange={(e) => setTotalVisitors(e.target.value)}
              />
            </div>
            <button
              data-ripple-light="true"
              type="submit"
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;

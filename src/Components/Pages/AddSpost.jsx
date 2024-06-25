import { toast } from "react-toastify";
import HelmetTitle from "../Loader/HelmetTitle";

const AddSpost = () => {
  const handleSubmit = (e) => {
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
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const newTouristSpot = {
      imageUrl,
      touristSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userEmail,
      userName,
    };

    // save spots in database
    fetch("https://assignrmnt-server.vercel.app/alltouristspots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        toast.success("Add Tourist Spot Success");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <HelmetTitle title="Add Spot" />
      <div className="min-h-screen  flex items-center justify-center p-5 w-full md:w-11/12 mx-auto rounded-md my-5">
        <div
          className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-8/12 lg:w-2/4"
          style={{ borderRadius: "13% 22% 14% 14% / 25% 22% 44% 26% " }}
        >
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased text-center">
              Please Add Your Favorite Spots
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="imageUrl"
                name="imageUrl"
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
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="userEmail">
                User Email
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="email"
                id="userEmail"
                name="userEmail"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="userName">
                User Name
              </label>
              <input
                className="w-full p-2 border border-cyan-400 rounded"
                type="text"
                id="userName"
                name="userName"
              />
            </div>
            <button
              data-ripple-light="true"
              type="submit"
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Add+
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSpost;

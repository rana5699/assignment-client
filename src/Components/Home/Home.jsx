import CountryContainer from "../CountrySections/CountryContainer";
import HolidayContainer from "../ExtraTwosection/HolidayContainer";
import Banner from "../Header/Banner";
import TouristContainer from "../TouristSpot/TouristContainer";

const Home = () => {
  return (
    <div>
      <div className="my-5 text-center  p-5 w-full md:w-11/12 mx-auto rounded-md">
        <Banner />
        <TouristContainer />
        <CountryContainer />
        <HolidayContainer />
      </div>
    </div>
  );
};

export default Home;

import CountryContainer from "../CountrySections/CountryContainer";
import ChooseTour from "../ExtraTwosection/ChooseTour";
import HolidayContainer from "../ExtraTwosection/HolidayContainer";
import Banner from "../Header/Banner";
import HelmetTitle from "../Loader/HelmetTitle";
import TouristContainer from "../TouristSpot/TouristContainer";

const Home = () => {
  return (
    <div>
      <div className="my-5 text-center  p-5 w-full md:w-11/12 mx-auto rounded-md">
        <HelmetTitle title="Home" />
        <Banner />
        <TouristContainer />
        <CountryContainer />
        <HolidayContainer />
        <ChooseTour />
      </div>
    </div>
  );
};

export default Home;

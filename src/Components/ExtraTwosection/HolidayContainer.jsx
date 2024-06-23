import Container from "../Pages/Container";
import HolidayPackages from "./HolidayPackages";

const HolidayContainer = () => {
  return (
    <div className="mt-10">
      <Container
        title="Best Selling
Tours And Fun Destinations"
        description="Traveling is one of the most enriching experiences one can have. It
            opens up a world of new cultures, cuisines, and breathtaking
            landscapes. Tourist spots around the globe attract millions of
            visitors every year, each offering unique experiences and memories
            to cherish."
      />
      <HolidayPackages />
    </div>
  );
};

export default HolidayContainer;

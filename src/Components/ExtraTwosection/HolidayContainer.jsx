import Container from "../Pages/Container";
import HolidayPackages from "./HolidayPackages";

const HolidayContainer = () => {
  return (
    <div className="mt-10">
      <Container
        title="Last Minutes Offers"
        description="These offers are commonly associated with travel and tourism, such as discounted flights, hotel rooms, vacation packages, or event tickets that need to be sold quickly before a specific date or deadline. "
      />
      <HolidayPackages />
    </div>
  );
};

export default HolidayContainer;

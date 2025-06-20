import Card from "./Card";
import "./Body.css";
import CitizenEngagementBanner from "./CitizenEngagementBanner";
const Body = () => {
  return (
    <>
      <div className="container">
        <CitizenEngagementBanner />
        <Card />
      </div>
    </>
  );
};

export default Body;

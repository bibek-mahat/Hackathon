import Card from "./Card";
import "./Body.css";

// import { Services } from "./services/Services";
const Body = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between">
          {/* <Services /> */}
          <Card />
        </div>
        
      </div>
    </>
  );
};

export default Body;

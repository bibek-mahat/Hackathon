import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <>
      <div className="main-container">
        <div className="card-section">
          <div className="card-container alert-urgent">
            <div className="card-body">
              <h2 className="card-title">
                Urgent: Road Closure on Main Street
              </h2>
              <p>
                Due to ongoing maintenance, Main Street will be closed from 10
                PM to 6 AM daily, starting tomorrow, for the next three days.
                Please use alternative routes.
              </p>
            </div>
          </div>

          <div className="card-container alert-info">
            <div className="card-body">
              <h2 className="card-title">
                Public Consultation on City Park Renovation
              </h2>
              <p>
                We invite citizens to share their ideas for the upcoming City
                Park renovation. Your feedback is crucial in shaping our
                community spaces. Details on our events page.
              </p>
            </div>
          </div>

          <div className="card-container alert-urgent">
            <div className="card-body">
              <h2 className="card-title">
                Water Supply Interruption in District 5
              </h2>
              <p>
                Planned water supply interruption on June 15th from 9 AM to 3 PM
                in District 5. We request the public to plan alternatives
                accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import "./FeedCard.css";
const FeedCard = () => {
  return (
    <>
      <div className="Feed-container">
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Pothole on Oak Avenue</h2>
            <p>
              A large pothole has developed near the intersection of Oak Avenue
              and Elm Street,causing issues for commmuters and potential damage
              to vehicles
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-green-400">Resolved</button>
            </div>
          </div>
        </div>
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Streetlight outage on Mapple Drive</h2>
            <p>
              Three Streetlights on Mapple Drive,specifically near house number
              45, have been out for the past week, making the area unsafe at
              night. Requesting immediate repair.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-400">Pending</button>
            </div>
          </div>
        </div>
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Noisy Construction After Hours</h2>
            <p>
              Construction work at the new commercial building on Cedar Street
              continues past 10 PM,causing significant noise disturbance to the
              residents in the vicinity.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-400">Pending</button>
            </div>
          </div>
        </div>
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Illegal Dumping in Greenbelt Area</h2>
            <p>
              There has been continues illegal dumping activitty in the
              greenbelt area behind Forest Drive.Authorities need to monitor and
              penalize offenders.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Under Review</button>
            </div>
          </div>
        </div>
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Public Park Maintainance Required</h2>
            <p>
              The swings at the central public park are broken, and the grass is
              overgrown.The park needs general maintaince to be safe and
              enjoyable for children
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-green-400">Resolved</button>
            </div>
          </div>
        </div>
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Missed Garbage Collection</h2>
            <p>
              Garbage collection was scheduled for Tuesday,but our bins were not
              emptied. This is the second time this month. Address is
              Banepa,Kavre.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Under Review</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;

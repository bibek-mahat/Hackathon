// components/ReportCard.jsx
const statusColors = {
  Resolved: "bg-green-400",
  Pending: "bg-red-400",
  "Under Review": "btn-primary",
};

const ReportCard = ({ title, description, status }) => {
  return (
    <div className="card card-dash bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className={`btn ${statusColors[status] || "btn-secondary"}`}>
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;

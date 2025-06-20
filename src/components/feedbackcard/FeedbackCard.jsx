// FeedbackCard.jsx
import React from "react";

const statusStyles = {
  Resolved: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  "Under Review": "bg-blue-100 text-blue-800",
};

const FeedbackCard = ({ title, id, description, status, date }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">ID: {id}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${statusStyles[status]}`}
        >
          {status}
        </span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;

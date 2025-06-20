import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const ComplaintCard = ({ complaint, onCall }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div
      className="p-4 rounded-xl shadow-md border border-blue-300 bg-white hover:shadow-xl transition-all relative group"
      onClick={() => setShowFull(!showFull)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-red-600 text-lg">
          {complaint.type}
        </h3>
        {/* <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
          +977 {complaint.phone}
        </span> */}
      </div>

      <p className="text-gray-700 text-sm">
        {showFull
          ? complaint.message
          : complaint.message.slice(0, 80) + "..."}
      </p>

      <div className="mt-4 flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCall(complaint.phone); // pass phone for WhatsApp
          }}
          className="flex items-center gap-2 text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700 transition"
        >
          <FaWhatsapp className="text-lg" />
<span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ComplaintCard;

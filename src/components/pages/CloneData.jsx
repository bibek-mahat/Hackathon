import React, { useState } from "react";

const complaints = [
  { id: 1, text: "Power outage since morning in Block B. Residents are unable to work from home and the issue has not been addressed despite multiple calls." },
  { id: 2, text: "Water leakage reported in apartment 302. It seems to be coming from the upper floor and is damaging our ceiling." },
  { id: 3, text: "Noise complaint from neighbors at night. Music volume is very loud past midnight." },
  { id: 4, text: "Garbage not collected for 3 days. It's starting to smell and attract insects around Tower 1." },
  { id: 5, text: "Lift not working in Tower 2. Elderly residents are struggling to climb the stairs." },
  { id: 6, text: "Street light flickering near main gate. It's creating an unsafe feeling at night." },
];

const ComplaintGrid = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 p-4 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {complaints.map((complaint) => {
          const isExpanded = expanded[complaint.id];
          const showReadMore = complaint.text.length > 100;

          return (
            <div
              key={complaint.id}
              className="bg-white rounded-2xl shadow-lg p-6 min-h-[180px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <p className="text-gray-800 text-lg font-medium">
                  {isExpanded || !showReadMore
                    ? complaint.text
                    : complaint.text.slice(0, 100) + "..."}
                </p>
                {showReadMore && (
                  <button
                    onClick={() => toggleExpanded(complaint.id)}
                    className="text-blue-500 hover:underline mt-2 text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              <div className="mt-4 flex justify-end">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    complaint.text
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.373 0 0 5.373...Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplaintGrid;

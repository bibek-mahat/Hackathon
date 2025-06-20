import React, { useEffect, useState } from "react";
//import ComplaintForm from "../components/ui/Complainform";
import ComplaintForm from "../ui/Complainform";
import ComplaintCard from "../ui/ComplainCard";
import PasswordPopup from "../ui/PasswordPopup";

const App = () => {
  const [complaints, setComplaints] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [authRequired, setAuthRequired] = useState(null);

  // 🔄 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("complaints");
    if (saved) {
      setComplaints(JSON.parse(saved));
    }
  }, []);

  // 💾 Save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }, [complaints]);

  const handleAddComplaint = (data) => {
    setComplaints([...complaints, data]);
    setShowForm(false);
  };

  const handleCall = (phone) => {
    setAuthRequired(phone);
  };

  const handleAuthSuccess = () => {
    window.open(`https://wa.me/977${authRequired}`, "_blank");
    setAuthRequired(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-red-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Public Complaints</h1>
        <button
          onClick={() => setShowForm(true)}
          className="text-red-600 font-semibold underline hover:text-red-800"
        >
          + Add complain
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {complaints.map((complaint, index) => (
          <ComplaintCard
            key={index}
            complaint={complaint}
            onCall={handleCall}
          />
        ))}
      </div>

      {showForm && (
        <ComplaintForm
          onSubmit={handleAddComplaint}
          onClose={() => setShowForm(false)}
        />
      )}
    
    
      {authRequired && (
        <PasswordPopup
          onSuccess={handleAuthSuccess}
          onClose={() => setAuthRequired(null)}
        />
      )}
    </div>
  );
};

export default App;

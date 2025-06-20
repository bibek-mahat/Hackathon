// components/ui/ComplaintForm.jsx
import React, { useState } from "react";

const ComplaintForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || !phone) return alert("Please fill all fields");
    onSubmit({ name, message, phone });
    setName("");
    setMessage("");
    setPhone("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Complaint</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <textarea
          placeholder="Your complaint"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Submit</button>
          <button type="button" onClick={onClose} className="text-red-600">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;

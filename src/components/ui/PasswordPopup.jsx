import React, { useState } from "react";

const PasswordPopup = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {
    if (password === "admin123") {
      onSuccess();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-72">
        <h2 className="font-semibold text-lg mb-2">Enter Password</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between mt-2">
          <button onClick={checkPassword} className="bg-green-600 text-white px-3 py-1 rounded">Submit</button>
          <button onClick={onClose} className="text-red-500">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordPopup;

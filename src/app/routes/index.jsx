import { Routes, Route } from "react-router-dom";
import Dashboard from "../../lib/pages/Dashboard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* You can add more routes here */}
  </Routes>
);

export default AppRoutes;

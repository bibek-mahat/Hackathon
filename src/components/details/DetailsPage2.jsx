import { BadgeCheck, MapPin } from "lucide-react";

const ParkMaintenanceDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src="/images/broken-swings.jpg"
          alt="Public Park Maintenance"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title and Status */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Public Park Maintenance Required
          </h1>
          <p className="text-gray-500">ID: C-2024-005E</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <BadgeCheck className="w-4 h-4" />
          Resolved
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <p className="text-gray-700 text-base leading-relaxed">
          The central public park had broken swings and overgrown grass, making
          it unsafe and unpleasant for visitors. General maintenance was
          required to restore the playground area and improve the park's
          appearance. The issue has now been resolved.
        </p>
      </div>

      {/* Map or Location Illustration */}
      <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4">
        <MapPin className="w-6 h-6 text-gray-600" />
        <span className="text-gray-700">
          Location: Central Public Park, near City Hall
        </span>
      </div>
    </div>
  );
};

export default ParkMaintenanceDetails;

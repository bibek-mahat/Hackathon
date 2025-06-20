import { BadgeCheck, MapPin } from "lucide-react";

const ReportDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src="/images/pothole-road.jpg"
          alt="Pothole on Oak Avenue"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title and Status */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Pothole on Oak Avenue
          </h1>
          <p className="text-gray-500">ID: C-2024-001A</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <BadgeCheck className="w-4 h-4" />
          Resolved • 1 week ago
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <p className="text-gray-700 text-base leading-relaxed">
          A large pothole had developed near the intersection of Oak Avenue and
          Elm Street. It was posing a hazard to daily commuters and had the
          potential to cause damage to vehicles. The issue has since been
          resolved and the road is now safe for travel.
        </p>
      </div>

      {/* Map or Location Illustration */}
      <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4">
        <MapPin className="w-6 h-6 text-gray-600" />
        <span className="text-gray-700">
          Location: Oak Avenue & Elm Street, near community park
        </span>
      </div>
    </div>
  );
};

export default ReportDetails;

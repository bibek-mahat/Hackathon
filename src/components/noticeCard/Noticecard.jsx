// NoticeCard.jsx

import { AlertCircle, Info } from "lucide-react";

export const NoticeCard = ({ type, title, description }) => {
  const isUrgent = type === "urgent";
  const Icon = isUrgent ? AlertCircle : Info;

  const bgColor = isUrgent ? "bg-red-100" : "bg-blue-100";
  const borderColor = isUrgent ? "border-red-300" : "border-blue-300";
  const textColor = isUrgent ? "text-red-700" : "text-blue-700";

  return (
    <div className={`border ${borderColor} ${bgColor} rounded-md p-4 mb-3`}>
      <div className="flex items-start gap-2">
        <Icon className={`${textColor} mt-1`} size={20} />
        <div>
          <h3 className={`font-semibold ${textColor}`}>{title}</h3>
          <p className="text-sm text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

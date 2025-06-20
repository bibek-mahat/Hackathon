// Notices.jsx

import { NoticeCard } from "./Noticecard";

const notices = [
  {
    type: "urgent",
    title: "Urgent: Road Closure on Main Street",
    description:
      "Due to ongoing maintenance, Main Street will be closed from 10 PM to 6 AM daily, starting tomorrow, for the next three days. Please use alternative routes.",
  },
  {
    type: "info",
    title: "Public Consultation on City Park Renovation",
    description:
      "We invite citizens to share their ideas for the upcoming City Park renovation. Your feedback is crucial in shaping our community spaces. Details on our events page.",
  },
  {
    type: "urgent",
    title: "Water Supply Interruption in District 5",
    description:
      "Planned water supply interruption on June 15th from 9 AM to 3 PM in District 5 due to pipe upgrades. We apologize for the inconvenience.",
  },
];

export const Notices = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
        Important Notices & Alerts
      </h2>
      {notices.map((notice, index) => (
        <NoticeCard
          key={index}
          type={notice.type}
          title={notice.title}
          description={notice.description}
        />
      ))}
    </div>
  );
};

// FeedbackGrid.jsx

import FeedbackCard from "./FeedbackCard";

const feedbacks = [
  {
    title: "Pothole on Oak Avenue",
    id: "C-2024-001A",
    description:
      "A large pothole has developed near the intersection of Oak Avenue and Elm Street, causing issues for commuters and potential damage to vehicles.",
    status: "Resolved",
    date: "1 week ago",
  },
  {
    title: "Streetlight outage on Maple Drive",
    id: "C-2024-002B",
    description:
      "Three streetlights on Maple Drive, near house number 45, have been out for the past week. Requesting immediate repair.",
    status: "Pending",
    date: "1 day ago",
  },
  {
    title: "Missed Garbage Collection",
    id: "C-2024-003C",
    description:
      "Garbage collection was scheduled for Tuesday, but our bins were not emptied. This is the second time this month.",
    status: "Under Review",
    date: "3 days ago",
  },
  {
    title: "Noisy Construction After Hours",
    id: "C-2024-004D",
    description:
      "Construction at the new commercial building on Cedar Street continues past 10 PM, causing significant noise disturbance.",
    status: "Pending",
    date: "5 days ago",
  },
  {
    title: "Public Park Maintenance Required",
    id: "C-2024-005E",
    description:
      "The swings at the central public park are broken, and the grass is overgrown. General maintenance is needed.",
    status: "Resolved",
    date: "1 week ago",
  },
  {
    title: "Blocked Storm Drain on River Road",
    id: "C-2024-006F",
    description:
      "A storm drain on River Road is completely blocked with debris, causing flooding during heavy rain.",
    status: "Under Review",
    date: "1 week ago",
  },
  {
    title: "Lack of Public Transport Shelter",
    id: "C-2024-007G",
    description:
      "The bus stop on Hillside Avenue lacks a proper shelter, leaving commuters exposed to rain and sun.",
    status: "Pending",
    date: "2 weeks ago",
  },
  {
    title: "Illegal Dumping in Greenbelt Area",
    id: "C-2024-008H",
    description:
      "Continuous illegal dumping in the greenbelt area behind Forest Drive. Authorities need to monitor and penalize offenders.",
    status: "Under Review",
    date: "3 weeks ago",
  },
];

const FeedbackGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        Citizen Feedback & Resolution Tracker
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks.map((item, idx) => (
          <FeedbackCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackGrid;

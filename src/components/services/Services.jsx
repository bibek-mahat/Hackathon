import {
  Home,
  Gavel,
  Briefcase,
  BookOpen,
  Heart,
  Mail,
  Shield,
  Leaf,
  Activity,
  Settings,
  FileText,
  Users,
} from "lucide-react";

const services = [
  { icon: <Home size={32} />, label: "Housing & Property" },
  { icon: <Gavel size={32} />, label: "Legal Aid & Justice" },
  { icon: <Briefcase size={32} />, label: "Employment Support" },
  { icon: <BookOpen size={32} />, label: "Education Enrollment" },
  { icon: <Heart size={32} />, label: "Healthcare Access" },
  { icon: <FileText size={32} />, label: "Taxation Services" },
  { icon: <Shield size={32} />, label: "Public Safety" },
  { icon: <Leaf size={32} />, label: "Environmental Protection" },
  { icon: <Users size={32} />, label: "Business Registration" },
  { icon: <Settings size={32} />, label: "Utility Services" },
  { icon: <Activity size={32} />, label: "Social Welfare" },
  { icon: <Mail size={32} />, label: "Postal Services" },
];

const Services = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
        Governmental Services
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-blue-50 transition"
          >
            <div className="text-blue-500 mb-2">{service.icon}</div>
            <span className="text-sm font-medium">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

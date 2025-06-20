import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "./Card";

const fetchService = async () => {
  const response = await axios.get(
    "https://628c-110-44-118-114.ngrok-free.app"
  );
  return response.data;
};

export const Services = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: fetchService,
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching services: {error.message}</p>;

  return (
    <div>
      {(data?.services || []).map((service) => (
        <Card key={service.id} icon={service.icon} label={service.label} />
      ))}
    </div>
  );
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "./Card";

const fetchService = async () => {
  const response = await axios.get(
    "https://9a4f-110-44-118-114.ngrok-free.app"
  );
  return response.data;
};

export const Services = () => {
  const { data, isLoading, error } = useQuery(["services"], fetchService);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((services) => (
        <Card icon={services.icon} label={services.label} />
      ))}
    </ul>
  );
};

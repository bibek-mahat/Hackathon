import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Example API
});

export const fetchPosts = () => api.get("/users").then((res) => res.data);

export default api;

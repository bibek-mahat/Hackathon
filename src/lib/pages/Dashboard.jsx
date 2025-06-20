import { usePosts } from "../queries/queries";

const Dashboard = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

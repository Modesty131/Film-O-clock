import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

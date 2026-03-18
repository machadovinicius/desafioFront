import { useParams } from "react-router-dom";

export function UserDetailsPage() {
  const { username } = useParams();

  return (
    <div className="container py-5">
      <h1 className="mb-3">Detalhes do Usuário</h1>
      <p className="text-muted mb-0">Username: {username}</p>
    </div>
  );
}

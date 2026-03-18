import { useParams } from "react-router-dom";

export function RepoDetailsPage() {
  const { owner, repoName } = useParams();

  return (
    <div className="container py-5">
      <h1 className="mb-3">Detalhes do Repositório</h1>
      <p className="text-muted mb-0">
        Repositório: {owner}/{repoName}
      </p>
    </div>
  );
}

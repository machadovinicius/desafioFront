import { Link } from "react-router-dom";
import type { GithubRepo } from "../../types/githubRepo";

type Props = {
  repository: GithubRepo;
};

export function RepoCard({ repository }: Props) {
  const [owner, repoName] = repository.full_name.split("/");

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body p-4 d-flex flex-column">
        <div className="mb-3">
          <h3 className="h5 fw-bold mb-1">{repository.name}</h3>
          <p className="text-muted mb-0 small">{repository.full_name}</p>
        </div>

        <div className="mb-4">
          <p className="text-muted mb-0">
            {repository.description || "Este repositório não possui descrição."}
          </p>
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <div className="border rounded p-2 h-100 bg-light">
              <span className="d-block text-muted small">Stars</span>
              <strong>{repository.stargazers_count}</strong>
            </div>
          </div>

          <div className="col-6">
            <div className="border rounded p-3 h-100 bg-light">
              <span className="d-block text-muted small mb-1">Linguagem</span>
              <strong>{repository.language || "Não informada"}</strong>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to={`/repo/${owner}/${repoName}`}
            className="btn btn-primary w-100"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

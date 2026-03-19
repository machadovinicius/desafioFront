import type { GithubRepoDetails } from "../../types/githubRepo";

type Props = {
  repository: GithubRepoDetails;
};

export function RepoDetailsCard({ repository }: Props) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="mb-4">
          <h1 className="h3 mb-1">{repository.name}</h1>
          <p className="text-muted mb-0">{repository.full_name}</p>
        </div>

        <div className="mb-4">
          <h2 className="h6 mb-1">Descrição</h2>
          <p className="mb-0 text-muted">
            {repository.description || "Este repositório não possui descrição."}
          </p>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="border rounded p-3 h-100">
              <span className="d-block text-muted small">Stars</span>
              <strong>{repository.stargazers_count}</strong>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="border rounded p-3 h-100">
              <span className="d-block text-muted small">Linguagem</span>
              <strong>{repository.language || "Não informada"}</strong>
            </div>
          </div>
        </div>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Abrir no GitHub
        </a>
      </div>
    </div>
  );
}

import type { GithubUser } from "../../types/githubUser";

type Props = {
  user: GithubUser;
};

export function UserProfileCard({ user }: Props) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4 p-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-3 text-center">
            <img
              style={{ maxWidth: 180 }}
              src={user.avatar_url}
              alt={`Avatar de ${user.login}`}
              className="img-fluid rounded-circle border"
            />
          </div>

          <div className="col-md-9">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
              <div>
                <h2 className="h3 fw-bold mb-1">{user.name || user.login}</h2>
                <p className="text-muted mb-0">@{user.login}</p>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                Ver perfil no GitHub
              </a>
            </div>

            <div className="mb-4">
              <h3 className="h6 text-uppercase text-muted mb-2">Bio</h3>
              <p className="mb-0 text-muted">
                {user.bio || "Este usuário não possui bio pública."}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="h6 text-uppercase text-muted mb-2">E-mail</h3>
              <p className="mb-0 text-muted">
                {user.email || "E-mail público não disponível."}
              </p>
            </div>

            <div className="row g-3">
              <div className="col-6 col-lg-4">
                <div className="border rounded p-3 h-100 bg-light">
                  <span className="d-block text-muted small mb-1">
                    Seguidores
                  </span>
                  <strong className="fs-5">{user.followers}</strong>
                </div>
              </div>

              <div className="col-6 col-lg-4">
                <div className="border rounded p-3 h-100 bg-light">
                  <span className="d-block text-muted small mb-1">
                    Seguindo
                  </span>
                  <strong className="fs-5">{user.following}</strong>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="border rounded p-3 h-100 bg-light">
                  <span className="d-block text-muted small mb-1">
                    Repositórios públicos
                  </span>
                  <strong>{user.public_repos}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

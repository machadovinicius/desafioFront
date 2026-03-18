import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../shared/components/PageContainer/PageContainer";

export function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!username.trim()) return;

    navigate(`/user/${username}`);
  }

  return (
    <PageContainer>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h3 className="mb-3 text-center">Buscar usuário do GitHub</h3>

            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Digite o username (ex: gaearon)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button type="submit" className="btn btn-primary w-100">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

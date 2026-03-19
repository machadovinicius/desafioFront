import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../../../shared/components/PageContainer/PageContainer";
import { PageState } from "../../../shared/components/PageState/PageState";
import { RepoDetailsCard } from "../components/RepoDetailsCard/RepoDetailsCard";
import { getGithubRepoDetails } from "../services/githubRepoService";
import type { GithubRepoDetails } from "../types/githubRepo";

export function RepoDetailsPage() {
  const { owner, repoName } = useParams();
  const navigate = useNavigate();
  const [repository, setRepository] = useState<GithubRepoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadRepositoryDetails() {
      if (!owner || !repoName) return;

      try {
        setIsLoading(true);
        setHasError(false);

        const repositoryData = await getGithubRepoDetails(owner, repoName);
        setRepository(repositoryData);
      } catch {
        setHasError(true);
        setRepository(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadRepositoryDetails();
  }, [owner, repoName]);

  return (
    <PageContainer>
      <div className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
        <div>
          <p className="text-muted small mb-2">
            Repositório / {owner} / {repoName}
          </p>
          <h1 className="h3 mb-1">Detalhes do repositório</h1>
          <p className="text-muted mb-0">
            Informações públicas do repositório selecionado.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>

      {isLoading ? (
        <PageState
          title="Carregando repositório..."
          description="Buscando os detalhes do repositório no GitHub."
        />
      ) : null}

      {!isLoading && hasError ? (
        <PageState
          title="Não foi possível carregar este repositório."
          description="Verifique os dados informados e tente novamente."
        />
      ) : null}

      {!isLoading && !hasError && repository ? (
        <RepoDetailsCard repository={repository} />
      ) : null}
    </PageContainer>
  );
}

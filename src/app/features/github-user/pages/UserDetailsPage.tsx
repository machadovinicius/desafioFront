import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../../shared/components/PageContainer/PageContainer";
import { PageState } from "../../../shared/components/PageState/PageState";
import { RepoList } from "../../github-repo/components/RepoList/RepoList";
import { getGithubUserRepos } from "../../github-repo/services/githubRepoService";
import type { GithubRepo } from "../../github-repo/types/githubRepo";
import { sortRepositoriesByStarsDesc } from "../../github-repo/utils/sortRepositories";
import { UserProfileCard } from "../components/UserProfileCard/UserProfileCard";
import { getGithubUser } from "../services/githubUserService";
import type { GithubUser } from "../types/githubUser";

export function UserDetailsPage() {
  const { username } = useParams();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repositories, setRepositories] = useState<GithubRepo[]>([]);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingRepositories, setIsLoadingRepositories] = useState(true);
  const [hasUserError, setHasUserError] = useState(false);
  const [hasRepositoriesError, setHasRepositoriesError] = useState(false);
  useEffect(() => {
    async function loadUser() {
      if (!username) return;

      try {
        setIsLoadingUser(true);
        setHasUserError(false);

        const userData = await getGithubUser(username);
        setUser(userData);
      } catch {
        setHasUserError(true);
        setUser(null);
      } finally {
        setIsLoadingUser(false);
      }
    }

    loadUser();
  }, [username]);

  useEffect(() => {
    async function loadRepositories() {
      if (!username) return;

      try {
        setIsLoadingRepositories(true);
        setHasRepositoriesError(false);

        const repositoriesData = await getGithubUserRepos(username);
        setRepositories(repositoriesData);
      } catch {
        setHasRepositoriesError(true);
        setRepositories([]);
      } finally {
        setIsLoadingRepositories(false);
      }
    }

    loadRepositories();
  }, [username]);

  const sortedRepositories = useMemo(() => {
    return sortRepositoriesByStarsDesc(repositories);
  }, [repositories]);

  return (
    <PageContainer>
      <div className="mb-4">
        <h1 className="h3 mb-1">Detalhes do usuário</h1>
        <p className="text-muted mb-0">
          Informações públicas do perfil no GitHub.
        </p>
      </div>

      {isLoadingUser ? (
        <PageState
          title="Carregando usuário..."
          description="Buscando informações do perfil no GitHub."
        />
      ) : null}

      {!isLoadingUser && hasUserError ? (
        <PageState
          title="Não foi possível carregar este usuário."
          description="Verifique o username informado e tente novamente."
        />
      ) : null}

      {!isLoadingUser && !hasUserError && user ? (
        <UserProfileCard user={user} />
      ) : null}

      {!hasUserError ? (
        <section>
          <div className="mb-4">
            <h2 className="h4 mb-1">Repositórios</h2>
            <p className="text-muted mb-0">
              Lista ordenada por número de estrelas em ordem decrescente.
            </p>
          </div>

          {isLoadingRepositories ? (
            <PageState
              title="Carregando repositórios..."
              description="Buscando os repositórios públicos deste usuário."
            />
          ) : null}

          {!isLoadingRepositories && hasRepositoriesError ? (
            <PageState
              title="Não foi possível carregar os repositórios."
              description="Ocorreu um problema ao consultar os repositórios deste usuário."
            />
          ) : null}

          {!isLoadingRepositories &&
          !hasRepositoriesError &&
          sortedRepositories.length === 0 ? (
            <PageState
              title="Nenhum repositório encontrado."
              description="Este usuário não possui repositórios públicos visíveis."
            />
          ) : null}

          {!isLoadingRepositories &&
          !hasRepositoriesError &&
          sortedRepositories.length > 0 ? (
            <RepoList repositories={sortedRepositories} />
          ) : null}
        </section>
      ) : null}
    </PageContainer>
  );
}

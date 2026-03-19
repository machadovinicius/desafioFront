import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../../shared/components/PageContainer/PageContainer";
import { PageState } from "../../../shared/components/PageState/PageState";
import { RepoList } from "../../github-repo/components/RepoList/RepoList";
import { RepoSortSelect } from "../../github-repo/components/RepoSortSelect/RepoSortSelect";

import { useGithubUserRepos } from "../../github-repo/hooks/useGithubUserRepos";
import {
  sortRepositories,
  type RepositorySortOption,
} from "../../github-repo/utils/sortRepositories";
import { UserProfileCard } from "../components/UserProfileCard/UserProfileCard";
import { useGithubUser } from "../hooks/useGithubUser";

export function UserDetailsPage() {
  const { username } = useParams();
  const {
    user,
    isLoading: isLoadingUser,
    hasError: hasUserError,
  } = useGithubUser(username);
  const {
    repositories,
    isLoading: isLoadingRepositories,
    hasError: hasRepositoriesError,
  } = useGithubUserRepos(username);

  const [sortOption, setSortOption] =
    useState<RepositorySortOption>("stars_desc");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [username]);

  const sortedRepositories = useMemo(() => {
    return sortRepositories(repositories, sortOption);
  }, [repositories, sortOption]);

  return (
    <PageContainer>
      <div className="mb-4">
        <p className="text-muted small mb-2">Home / {username}</p>
        <h1 className="h3 mb-1">Detalhes do usuário</h1>
        <p className="text-muted mb-0">
          Visualize informações públicas do perfil e a lista de repositórios
          deste usuário.
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
          <RepoSortSelect value={sortOption} onChange={setSortOption} />

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

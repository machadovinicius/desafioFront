import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../../shared/components/PageContainer/PageContainer";
import { PageState } from "../../../shared/components/PageState/PageState";
import { UserProfileCard } from "../components/UserProfileCard/UserProfileCard";
import { getGithubUser } from "../services/githubUserService";
import type { GithubUser } from "../types/githubUser";

export function UserDetailsPage() {
  const { username } = useParams();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadUser() {
      if (!username) return;

      try {
        setIsLoading(true);
        setHasError(false);

        const userData = await getGithubUser(username);
        setUser(userData);
      } catch {
        setHasError(true);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, [username]);
  return (
    <PageContainer>
      <div className="mb-4">
        <h1 className="h3 mb-1">Detalhes do usuário</h1>
        <p className="text-muted mb-0">
          Informações públicas do perfil no GitHub.
        </p>
      </div>

      {isLoading ? (
        <PageState
          title="Carregando usuário..."
          description="Buscando informações do perfil no GitHub."
        />
      ) : null}

      {!isLoading && hasError ? (
        <PageState
          title="Não foi possível carregar este usuário."
          description="Verifique o username informado e tente novamente."
        />
      ) : null}

      {!isLoading && !hasError && user ? <UserProfileCard user={user} /> : null}
    </PageContainer>
  );
}

import { useEffect, useState } from 'react';
import { getGithubUserRepos } from '../services/githubRepoService';
import type { GithubRepo } from '../types/githubRepo';

type UseGithubUserReposResult = {
  repositories: GithubRepo[];
  isLoading: boolean;
  hasError: boolean;
};

export function useGithubUserRepos(
  username?: string,
): UseGithubUserReposResult {
  const [repositories, setRepositories] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadRepositories() {
      if (!username) {
        setRepositories([]);
        setIsLoading(false);
        setHasError(false);
        return;
      }

      try {
        setIsLoading(true);
        setHasError(false);

        const repositoriesData = await getGithubUserRepos(username);
        setRepositories(repositoriesData);
      } catch {
        setHasError(true);
        setRepositories([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadRepositories();
  }, [username]);

  return {
    repositories,
    isLoading,
    hasError,
  };
}
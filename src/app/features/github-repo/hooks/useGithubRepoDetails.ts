import { useEffect, useState } from 'react';
import { getGithubRepoDetails } from '../services/githubRepoService';
import type { GithubRepoDetails } from '../types/githubRepo';

type UseGithubRepoDetailsResult = {
  repository: GithubRepoDetails | null;
  isLoading: boolean;
  hasError: boolean;
};

export function useGithubRepoDetails(
  owner?: string,
  repoName?: string,
): UseGithubRepoDetailsResult {
  const [repository, setRepository] = useState<GithubRepoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadRepositoryDetails() {
      if (!owner || !repoName) {
        setRepository(null);
        setIsLoading(false);
        setHasError(false);
        return;
      }

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

  return {
    repository,
    isLoading,
    hasError,
  };
}
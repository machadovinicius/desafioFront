import { useEffect, useState } from 'react';
import { getGithubUser } from '../services/githubUserService';
import type { GithubUser } from '../types/githubUser';

type UseGithubUserResult = {
  user: GithubUser | null;
  isLoading: boolean;
  hasError: boolean;
};

export function useGithubUser(username?: string): UseGithubUserResult {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadUser() {
      if (!username) {
        setUser(null);
        setIsLoading(false);
        setHasError(false);
        return;
      }

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

  return {
    user,
    isLoading,
    hasError,
  };
}
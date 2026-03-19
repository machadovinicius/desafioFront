import type { GithubRepo } from '../types/githubRepo';

export function sortRepositoriesByStarsDesc(repositories: GithubRepo[]) {
  return [...repositories].sort(
    (currentRepository, nextRepository) =>
      nextRepository.stargazers_count - currentRepository.stargazers_count,
  );
}
import type { GithubRepo } from '../types/githubRepo';

export type RepositorySortOption =
  | 'stars_desc'
  | 'stars_asc'
  | 'name_asc'
  | 'name_desc';

export function sortRepositories(
  repositories: GithubRepo[],
  sortOption: RepositorySortOption,
) {
  const sortedRepositories = [...repositories];

  switch (sortOption) {
    case 'stars_asc':
      return sortedRepositories.sort(
        (currentRepository, nextRepository) =>
          currentRepository.stargazers_count - nextRepository.stargazers_count,
      );

    case 'name_asc':
      return sortedRepositories.sort((currentRepository, nextRepository) =>
        currentRepository.name.localeCompare(nextRepository.name),
      );

    case 'name_desc':
      return sortedRepositories.sort((currentRepository, nextRepository) =>
        nextRepository.name.localeCompare(currentRepository.name),
      );

    case 'stars_desc':
    default:
      return sortedRepositories.sort(
        (currentRepository, nextRepository) =>
          nextRepository.stargazers_count - currentRepository.stargazers_count,
      );
  }
}
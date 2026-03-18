import { httpClient } from '../../../shared/services/httpClient';
import type { GithubRepo, GithubRepoDetails } from '../types/githubRepo';

export async function getGithubUserRepos(username: string) {
  const response = await httpClient.get<GithubRepo[]>(`/users/${username}/repos`);
  return response.data;
}

export async function getGithubRepoDetails(owner: string, repoName: string) {
  const response = await httpClient.get<GithubRepoDetails>(`/repos/${owner}/${repoName}`);
  return response.data;
}
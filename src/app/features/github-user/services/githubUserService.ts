import { httpClient } from '../../../shared/services/httpClient';
import type { GithubUser } from '../types/githubUser';

export async function getGithubUser(username: string) {
  const response = await httpClient.get<GithubUser>(`/users/${username}`);
  return response.data;
}
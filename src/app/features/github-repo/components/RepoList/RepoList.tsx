import type { GithubRepo } from "../../types/githubRepo";
import { RepoCard } from "../RepoCard/RepoCard";

type Props = {
  repositories: GithubRepo[];
};

export function RepoList({ repositories }: Props) {
  return (
    <div className="row g-4">
      {repositories.map((repository) => (
        <div key={repository.id} className="col-12 col-md-6 col-lg-4">
          <RepoCard repository={repository} />
        </div>
      ))}
    </div>
  );
}

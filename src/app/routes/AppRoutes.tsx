import { Navigate, Route, Routes } from "react-router-dom";
import { RepoDetailsPage } from "../features/github-repo/pages/RepoDetailsPage";
import { HomePage } from "../features/github-user/pages/HomePage";
import { UserDetailsPage } from "../features/github-user/pages/UserDetailsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:username" element={<UserDetailsPage />} />
      <Route path="/repo/:owner/:repoName" element={<RepoDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

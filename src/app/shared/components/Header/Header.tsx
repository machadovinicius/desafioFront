import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-dark text-white py-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none">
          <h5 className="mb-0">GitHub Explorer</h5>
        </Link>

        <span className="text-muted small">Front-end Challenge</span>
      </div>
    </header>
  );
}

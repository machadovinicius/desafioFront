import type { RepositorySortOption } from "../../utils/sortRepositories";

type Props = {
  value: RepositorySortOption;
  onChange: (value: RepositorySortOption) => void;
};

export function RepoSortSelect({ value, onChange }: Props) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
      <div>
        <h2 className="h4 mb-1">Repositórios</h2>
        <p className="text-muted mb-0">
          Ordene a lista conforme sua preferência.
        </p>
      </div>

      <div>
        <label htmlFor="repository-order" className="form-label mb-1">
          Ordenar por
        </label>
        <select
          id="repository-order"
          className="form-select"
          value={value}
          onChange={(event) =>
            onChange(event.target.value as RepositorySortOption)
          }
        >
          <option value="stars_desc">Stars: maior para menor</option>
          <option value="stars_asc">Stars: menor para maior</option>
          <option value="name_asc">Nome: A-Z</option>
          <option value="name_desc">Nome: Z-A</option>
        </select>
      </div>
    </div>
  );
}

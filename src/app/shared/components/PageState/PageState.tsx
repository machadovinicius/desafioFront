type Props = {
  title: string;
  description?: string;
};

export function PageState({ title, description }: Props) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 mb-2">{title}</h2>
        {description ? <p className="mb-0 text-muted">{description}</p> : null}
      </div>
    </div>
  );
}

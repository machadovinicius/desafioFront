type Props = {
  title: string;
  description?: string;
};

export function PageState({ title, description }: Props) {
  return (
    <div className="alert alert-light border" role="alert">
      <h5 className="mb-1">{title}</h5>
      {description ? <p className="mb-0 text-muted">{description}</p> : null}
    </div>
  );
}

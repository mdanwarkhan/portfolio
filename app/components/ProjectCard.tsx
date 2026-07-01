type Props = {
  title: string;
  description?: string;
  link?: string;
};

export default function ProjectCard({ title, description, link }: Props) {
  const content = (
    <div className="card">
      <h3 className="font-medium">{title}</h3>
      {description && <p className="text-sm text-zinc-600">{description}</p>}
    </div>
  );

  return link ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

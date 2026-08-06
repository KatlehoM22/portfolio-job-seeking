type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="section-title rise-in">
      {eyebrow ? (
        <p className="section-title__eyebrow">
          {"//"} {eyebrow}
        </p>
      ) : null}
      <h1 className="section-title__title">
        {title}
      </h1>
      {description ? (
        <p className="section-title__description">
          {description}
        </p>
      ) : null}
    </div>
  );
}

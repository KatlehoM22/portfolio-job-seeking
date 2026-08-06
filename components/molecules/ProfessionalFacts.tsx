type ProfessionalFact = {
  label: string;
  value: string;
};

export function ProfessionalFacts({ facts }: { facts: ProfessionalFact[] }) {
  return (
    <dl className="professional-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

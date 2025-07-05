import type { ExperienceItem } from '../constants';

interface ExpContentProps {
  expContent: ExperienceItem;
}

const ExpContent: React.FC<ExpContentProps> = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.date}</p>
      <p className="text-white-50">Responsabilidades</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.responsibilities.map((responsibility: string, index: number) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;

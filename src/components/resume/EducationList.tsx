import { EducationItem } from "@/types/resume";

type EducationListProps = {
  items: EducationItem[];
};

const EducationList = ({ items }: EducationListProps) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {items.map((item) => (
        <li
          key={`${item.institution}-${item.degree}`}
          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
        >
          <h4 className="text-xl font-semibold">{item.degree}</h4>

          <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-white/60">{item.institution}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EducationList;

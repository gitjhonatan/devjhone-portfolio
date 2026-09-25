import { ExperienceItem } from "@/data/resume/experience";

type ExperienceListProps = {
    items: ExperienceItem[];
};

const ExperienceList = ({ items }: ExperienceListProps) => {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {items.map((item) => (
                <li
                    key={`${item.company}-${item.position}`}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                    <span className="text-accent">{item.duration}</span>

                    <h4 className="text-xl font-semibold">
                        {item.position}
                    </h4>

                    <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ExperienceList;
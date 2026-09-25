import { AboutInfo } from "@/data/resume/about";

type AboutListProps = {
    items: AboutInfo[];
};

const AboutList = ({ items }: AboutListProps) => {
    return (
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {items.map((item) => (
                <li
                    key={item.fieldName}
                    className="flex items-center justify-center xl:justify-start gap-4"
                >
                    <span className="text-white/60">
                        {item.fieldName}:
                    </span>

                    <span className="font-medium">
                        {item.fieldValue}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default AboutList;
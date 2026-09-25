import type { SkillItem } from "@/data/resume/skills";
import { skillIcons } from "./SkiIlIcons";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type SkillsListProps = {
    items: SkillItem[];
};

const SkillsList = ({ items }: SkillsListProps) => {
    return (
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
            {items.map(({ icon, name }) => {
                const Icon = skillIcons[icon];

                return (
                    <li key={name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                        <Icon />

                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className='capitalize'>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>

                );
            })}
        </ul>
    );
};

export default SkillsList;
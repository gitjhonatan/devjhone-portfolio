'use client';

import { motion } from "framer-motion";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import { about } from "@/data/resume/about";
import { education } from "@/data/resume/education";
import { experience } from "@/data/resume/experience";
import { skills } from "@/data/resume/skills";

import ExperienceList from "./ExperienceList";
import ResumeSection from "./ResumeSection";
import EducationList from "./EducationList";
import SkillsList from "./SkillsList";
import AboutList from "./AboutList";

const ResumeTabs = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">
                            Experience
                        </TabsTrigger>

                        <TabsTrigger value="education">
                            Education
                        </TabsTrigger>

                        <TabsTrigger value="skills">
                            Skills
                        </TabsTrigger>

                        <TabsTrigger value="about">
                            About Me
                        </TabsTrigger>
                    </TabsList>

                    <div className="min-h-[80vh] w-full">
                        <TabsContent value="experience">
                            <ResumeSection
                                title={experience.title}
                                description={experience.description}
                            >
                                <ScrollArea className="h-[400px]">
                                    <ExperienceList items={experience.items} />
                                </ScrollArea>
                            </ResumeSection>
                        </TabsContent>

                        <TabsContent value="education">
                            <ResumeSection
                                title={education.title}
                                description={education.description}
                            >
                                <ScrollArea className="h-[400px]">
                                    <EducationList items={education.items} />
                                </ScrollArea>
                            </ResumeSection>
                        </TabsContent>
                        <TabsContent value="skills">
                            <ResumeSection
                                title={skills.title}
                                description={skills.description}
                            >
                                <ScrollArea className="h-[400px]">
                                    <SkillsList items={skills.items} />
                                </ScrollArea>
                            </ResumeSection>
                        </TabsContent>

                        <TabsContent value="about">
                            <ResumeSection
                                title={about.title}
                                description={about.description}
                            >
                                <AboutList items={about.info} />
                            </ResumeSection>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default ResumeTabs;
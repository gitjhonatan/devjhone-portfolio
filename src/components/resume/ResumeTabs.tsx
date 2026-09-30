"use client";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import { skills } from "@/data/resume/skills";

import ExperienceList from "./ExperienceList";
import ResumeSection from "./ResumeSection";
import EducationList from "./EducationList";
import SkillsList from "./SkillsList";
import AboutList from "./AboutList";
import { useTranslations } from "next-intl";
import { AboutItem, EducationItem, ExperienceItem } from "@/types/resume";

const ResumeTabs = () => {
  const t = useTranslations("ResumePage");
  const experienceItems = t.raw("experience.items") as ExperienceItem[];
  const educationItems = t.raw("education.items") as EducationItem[];
  const aboutItems = t.raw("about.items") as AboutItem[];
  
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
            <TabsTrigger value="experience">{t("tabs.experience")}</TabsTrigger>

            <TabsTrigger value="education">{t("tabs.education")}</TabsTrigger>

            <TabsTrigger value="skills">{t("tabs.skills")}</TabsTrigger>

            <TabsTrigger value="about">{t("tabs.about")}</TabsTrigger>
          </TabsList>

          <div className="min-h-[80vh] w-full">
            <TabsContent value="experience">
              <ResumeSection
                title={t("experience.title")}
                description={t("experience.description")}
              >
                <ScrollArea className="h-[400px]">
                  <ExperienceList items={experienceItems} />
                </ScrollArea>
              </ResumeSection>
            </TabsContent>

            <TabsContent value="education">
              <ResumeSection
                title={t("education.title")}
                description={t("education.description")}
              >
                <ScrollArea className="h-[400px]">
                  <EducationList items={educationItems} />
                </ScrollArea>
              </ResumeSection>
            </TabsContent>
            <TabsContent value="skills">
              <ResumeSection
                title={t("skills.title")}
                description={t("skills.description")}
              >
                <ScrollArea className="h-[400px]">
                  <SkillsList items={skills} />
                </ScrollArea>
              </ResumeSection>
            </TabsContent>

            <TabsContent value="about">
              <ResumeSection
                title={t("about.title")}
                description={t("about.description")}
              >
                <AboutList items={aboutItems} />
              </ResumeSection>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeTabs;

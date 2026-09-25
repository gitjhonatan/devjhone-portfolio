export type ExperienceItem = {
    company: string;
    position: string;
    duration: string;
};

export type Experience = {
    title: string;
    description: string;
    items: ExperienceItem[];
};

export const experience: Experience = {
    title: "Professional Experience",
    description: "A journey shaped by experience, leadership, and growth",
    items: [
        {
            company: "BlueMaxx",
            position: "Full Stack Engineer",
            duration: "Feb 2025 - Present",
        },
        {
            company: "Match<IT>",
            position: "Full Stack Engineer / Tech Lead",
            duration: "Sep 2022 - Nov 2024",
        },
        {
            company: "Fix",
            position: "Full Stack Engineer",
            duration: "Jun 2021 - Aug 2022",
        },
        {
            company: "Corte Certo",
            position: "Full Stack Engineer",
            duration: "Nov 2020 - Jul 2021",
        },
        {
            company: "Braavo!",
            position: "Backend Engineer",
            duration: "Jul 2020 - Mar 2021",
        },
        {
            company: "Promotora Presença",
            position: "Full Stack Engineer",
            duration: "Apr 2019 - Apr 2020",
        },
        {
            company: "Logus Informática",
            position: "Web Designer",
            duration: "Feb 2015 - Sep 2015",
        },
    ],
};
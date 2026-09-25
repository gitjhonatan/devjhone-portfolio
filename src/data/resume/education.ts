export type EducationItem = {
    institution: string;
    position: string;
    duration: string;
};

export type Education = {
    icon: string;
    title: string;
    description: string;
    items: EducationItem[];
};

export const education: Education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description:
        "Academic background in technology, complemented by practical experience in software engineering and system development.",
    items: [
        {
            institution: "Universidade Anhembi Morumbi",
            position: "Systems Analysis and Development",
            duration: "In Progress",
        },
    ],
};
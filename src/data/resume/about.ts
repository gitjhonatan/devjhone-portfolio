export type AboutInfo = { fieldName: string; fieldValue: string; };

export type About = {
    title: string;
    description: string;
    info: AboutInfo[];
};

export const about: About = {
    title: "About Me",
    description:
        "Software engineer with a passion for solving complex problems, building reliable solutions, and continuously learning. I value clean code, thoughtful architecture, and practical solutions that create real impact.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jhonatan Lima",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+55) 11 98478-6817",
        },
        {
            fieldName: "Experience",
            fieldValue: "7+ years",
        },
        {
            fieldName: "Email",
            fieldValue: "jhonatan.lima@gmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brazilian",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Portuguese, English",
        },
    ],
};

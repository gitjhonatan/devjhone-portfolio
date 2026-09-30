export type SkillIcon =
    | "react"
    | "nextjs"
    | "typescript"
    | "javascript"
    | "vue"
    | "angular"
    | "tailwind"
    | "html"
    | "css"
    | "php"
    | "laravel"
    | "node"
    | "nestjs"
    | "python"
    | "mysql"
    | "mariadb"
    | "postgresql"
    | "mongodb"
    | "sqlserver"
    | "redis"
    | "elasticsearch"
    | "aws"
    | "docker"
    | "linux"
    | "terraform"
    | "git"
    | "mikrotik";

export type SkillItem = {
    icon: SkillIcon;
    name: string;
};

export const skills: SkillItem[] = [
    { icon: "react", name: "React" },
    { icon: "nextjs", name: "Next.js" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "javascript", name: "JavaScript" },
    { icon: "vue", name: "Vue.js" },
    { icon: "angular", name: "Angular" },
    { icon: "tailwind", name: "Tailwind CSS" },
    { icon: "html", name: "HTML5" },
    { icon: "css", name: "CSS3" },
    { icon: "php", name: "PHP" },
    { icon: "laravel", name: "Laravel" },
    { icon: "node", name: "Node.js" },
    { icon: "nestjs", name: "NestJS" },
    { icon: "python", name: "Python" },
    { icon: "mysql", name: "MySQL" },
    { icon: "mariadb", name: "MariaDB" },
    { icon: "postgresql", name: "PostgreSQL" },
    { icon: "mongodb", name: "MongoDB" },
    { icon: "sqlserver", name: "SQL Server" },
    { icon: "redis", name: "Redis" },
    { icon: "elasticsearch", name: "Elasticsearch" },
    { icon: "aws", name: "AWS" },
    { icon: "docker", name: "Docker" },
    { icon: "linux", name: "Linux" },
    { icon: "terraform", name: "Terraform" },
    { icon: "git", name: "Git" },
    { icon: "mikrotik", name: "MikroTik" },
];
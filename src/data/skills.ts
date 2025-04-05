export const skillLevel = {
    0: "Familiar",
    1: "Novice++",
    2: "Intermediate",
    3: "Proficient",
    4: "Advanced",
};

type TSkillEnum = keyof typeof skillLevel;

type ITechStack = Record<
    string,
    {
        name: string;
        experienceTime: number;
        level: TSkillEnum;
        purpose?: string;
    }[]
>;

// Number of year of experience
export const yearOfExperience = 2.5;

const techStack: ITechStack = {
    "Programming Languages": [
        {
            name: "PHP",
            experienceTime: 2.5,
            level: 4,
            purpose: "Create package or review complex code",
        },
        {
            name: "Go",
            experienceTime: 2,
            level: 2,
            purpose: "Used in real projects",
        },
        {
            name: "TypeScript",
            experienceTime: 2,
            level: 3,
            purpose: "Used in production",
        },
        { name: "Java", experienceTime: 1, level: 2 },
        { name: "Python", experienceTime: 1, level: 2 },
        { name: "Arduino", experienceTime: 1, level: 2 },
    ],
    "Libraries & Frameworks": [
        {
            name: "Laravel",
            experienceTime: 2.5,
            level: 4,
            purpose: "Mentor others & reviews",
        },
        {
            name: "CodeIgniter",
            experienceTime: 2.5,
            level: 4,
            purpose: "Used in production",
        },
        {
            name: "Symfony",
            experienceTime: 1,
            level: 2,
            purpose: "Exploring in side projects",
        },
        { name: "Elysia", experienceTime: 1, level: 2 },
        {
            name: "Express",
            experienceTime: 2,
            level: 3,
            purpose: "Used in production",
        },
        { name: "Gin-Gonic", experienceTime: 1.5, level: 3 },
        { name: "Echo Go", experienceTime: 1.5, level: 3 },
        {
            name: "React",
            experienceTime: 1.5,
            level: 3,
            purpose: "Used in production",
        },
        {
            name: "NodeJS",
            experienceTime: 2,
            level: 3,
            purpose: "Used in production",
        },
        {
            name: "Bun JS",
            experienceTime: 1,
            level: 1,
            purpose: "Exploring in side projects",
        },
    ],
    "Tools & Infrastructure": [
        {
            name: "Docker",
            experienceTime: 1.5,
            level: 2,
            purpose: "Used in production",
        },
        {
            name: "Prometheus",
            experienceTime: 1,
            level: 1,
            purpose: "Used in production",
        },
        {
            name: "Grafana",
            experienceTime: 1,
            level: 1,
            purpose: "Used in production",
        },
        {
            name: "Nginx",
            experienceTime: 1.5,
            level: 2,
            purpose: "Used in production",
        },
        {
            name: "Redis",
            experienceTime: 2.5,
            level: 2,
            purpose: "Used in production",
        },
        {
            name: "RabbitMQ",
            experienceTime: 1,
            level: 2,
            purpose: "Used in production",
        },
        {
            name: "AWS S3/ECR/ECS",
            experienceTime: 1,
            level: 1,
            purpose: "Exploring in side projects",
        },
        {
            name: "LabView",
            experienceTime: 1,
            level: 2,
            purpose: "Used in production",
        },
        {
            name: "SCADA",
            experienceTime: 1,
            level: 2,
            purpose: "Used in production",
        },
    ],
    Databases: [
        {
            name: "PostgreSQL",
            experienceTime: 2.5,
            level: 4,
            purpose: "Used in production",
        },
        {
            name: "MySQL",
            experienceTime: 2.5,
            level: 4,
            purpose: "Used in production",
        },
        {
            name: "SQLite",
            experienceTime: 1,
            level: 4,
            purpose: "Used in production",
        },
        {
            name: "MongoDB",
            experienceTime: 1,
            level: 2,
            purpose: "Exploring in real project",
        },
    ],
    OS: [
        {
            name: "Ubuntu",
            experienceTime: 2,
            level: 3,
            purpose: "Used in production",
        },
    ],
    "AI Tools": [
        { name: "OpenAI", experienceTime: 1, level: 2 },
        { name: "ChromaDB", experienceTime: 0.5, level: 1 },
    ],
};

// Get all category names
export const categories = Object.keys(techStack);

export default techStack;

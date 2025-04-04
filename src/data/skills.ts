type ITechStack = Record<string, { name: string; experienceTime: number }[]>;

// Number of year of experience
export const yearOfExperience = 2.5;

const techStack: ITechStack = {
    "Programming Languages": [
        { name: "PHP", experienceTime: 2.5 },
        { name: "Go", experienceTime: 2 },
        { name: "TypeScript", experienceTime: 2 },
        { name: "Java", experienceTime: 1 },
        { name: "Python", experienceTime: 1 },
        { name: "Arduino", experienceTime: 1 },
    ],
    "Libraries & Frameworks": [
        { name: "Laravel", experienceTime: 2.5 },
        { name: "CodeIgniter", experienceTime: 2.5 },
        { name: "Symfony", experienceTime: 1 },
        { name: "Elysia", experienceTime: 1 },
        { name: "Express", experienceTime: 2 },
        { name: "Gin-Gonic", experienceTime: 1.5 },
        { name: "Echo Go", experienceTime: 1.5 },
        { name: "React", experienceTime: 1.5 },
        { name: "NodeJS", experienceTime: 2 },
        { name: "Bun JS", experienceTime: 1 },
    ],
    "Tools & Infrastructure": [
        { name: "Docker", experienceTime: 1.5 },
        { name: "Prometheus", experienceTime: 1 },
        { name: "Grafana", experienceTime: 1 },
        { name: "Nginx", experienceTime: 1.5 },
        { name: "Redis", experienceTime: 2.5 },
        { name: "RabbitMQ", experienceTime: 1 },
        { name: "AWS S3/SQR/ECS", experienceTime: 1 },
        { name: "LabView", experienceTime: 1 },
        { name: "SCADA", experienceTime: 1 },
    ],
    Databases: [
        { name: "PostgreSQL", experienceTime: 2.5 },
        { name: "MySQL", experienceTime: 2.5 },
        { name: "SQLite", experienceTime: 1 },
        { name: "MongoDB", experienceTime: 1 },
    ],
    OS: [{ name: "Ubuntu", experienceTime: 2 }],
    "AI Tools": [
        { name: "OpenAI", experienceTime: 1 },
        { name: "ChromaDB", experienceTime: 0.5 },
    ],
};

// Get all category names
export const categories = Object.keys(techStack);

export default techStack;

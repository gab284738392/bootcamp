import { CERTS, EXPERIENCE, PROJECTS, SKILLS } from "@/data";
import { prisma } from "@/lib/prisma";

export type PortfolioSkillGroup = {
    category: string;
    icon: string;
    order: number;
    items: string[];
};

export type PortfolioData = {
    user: {
        id: number;
        name: string | null;
        email: string;
        role: string;
    } | null;
    showImages: boolean;
    skills: PortfolioSkillGroup[];
    projects: Array<{
        id: number;
        name: string;
        tag: string;
        year: string;
        description: string;
        image?: string | null;
        color?: string;
        accent?: string;
    }>;
    experiences: Array<{
        id: number;
        role: string;
        org: string;
        period: string;
        description: string;
    }>;
    certifications: Array<{
        id: number;
        name: string;
        year: string;
        issuer: string;
    }>;
};

const fallbackPortfolio: PortfolioData = {
    user: {
        id: 0,
        name: "Portfolio Profile",
        email: "public@example.com",
        role: "public",
    },
    showImages: false,
    skills: SKILLS.map((group) => ({
        category: group.category,
        icon: group.icon,
        order: 0,
        items: [...group.items],
    })),
    projects: PROJECTS.map((project, index) => ({
        id: index + 1,
        name: project.name,
        tag: project.tag,
        year: project.year,
        description: project.desc,
        image: null,
        color: project.color,
        accent: project.accent,
    })),
    experiences: EXPERIENCE.map((exp, index) => ({
        id: index + 1,
        role: exp.role,
        org: exp.org,
        period: exp.period,
        description: exp.desc,
    })),
    certifications: CERTS.map((cert, index) => ({
        id: index + 1,
        name: cert.name,
        year: cert.year,
        issuer: cert.issuer,
    })),
};

export async function getPortfolio(
    email?: string | null,
): Promise<PortfolioData> {
    const normalizedEmail = email?.trim();
    const isPersonalProfile = normalizedEmail === "eme@gmail.com";

    if (!normalizedEmail) {
        return fallbackPortfolio;
    }

    const user = await prisma.users.findUnique({
        where: {
            email: normalizedEmail,
        },
        include: {
            projects: {
                orderBy: { id: "asc" },
            },
            experiences: {
                orderBy: { id: "asc" },
            },
            certifications: {
                orderBy: { id: "asc" },
            },
            skills: {
                include: {
                    category: true,
                },
            },
        },
    });

    if (!user) {
        return fallbackPortfolio;
    }

    if (!isPersonalProfile) {
        return {
            ...fallbackPortfolio,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            skills: [],
            projects: [],
            experiences: [],
            certifications: [],
        };
    }

    const groupedSkills = new Map<
        number,
        { category: string; icon: string; order: number; items: string[] }
    >();

    for (const skill of user.skills) {
        const categoryId = skill.categoryId;
        const category = skill.category;

        if (!groupedSkills.has(categoryId)) {
            groupedSkills.set(categoryId, {
                category: category.category,
                icon: category.icon,
                order: category.order,
                items: [],
            });
        }

        groupedSkills.get(categoryId)!.items.push(skill.name);
    }

    const skills = [...groupedSkills.values()].sort((a, b) => a.order - b.order);

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        showImages: true,
        skills,
        projects: PROJECTS.map((project, index) => ({
            id: index + 1,
            name: project.name,
            tag: project.tag,
            year: project.year,
            description: project.desc,
            image: project.image,
            color: project.color,
            accent: project.accent,
        })),
        experiences: user.experiences.map((experience) => ({
            id: experience.id,
            role: experience.role,
            org: experience.org,
            period: experience.period,
            description: experience.description,
        })),
        certifications: user.certifications.map((certification) => ({
            id: certification.id,
            name: certification.name,
            year: certification.year,
            issuer: certification.issuer,
        })),
    };
}


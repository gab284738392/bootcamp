import { CERTS, EXPERIENCE, PROJECTS, SKILLS } from "../data";
import { prisma } from "../lib/prisma";

async function main() {

  const user = await prisma.users.create({
    data: {
      name: "Gabrielle Madarang",
      email: "gabmadarang33@gmail.com",
      password: "mimi38311",
      role: "user",
    },
  });

  console.log("Created user:", user);

  for (const [index, skillGroup] of SKILLS.entries()) {
    const category = await prisma.skillCategories.create({
      data: {
        category: skillGroup.category,
        icon: skillGroup.icon,
        order: index,
      },
    });

    for (const [itemIndex, itemName] of skillGroup.items.entries()) {
      await prisma.skillItems.create({
        data: {
          name: itemName,
          order: itemIndex,
          categoryId: category.id,
          usersId: user.id,
        },
      });
    }
  }

  await prisma.projects.createMany({
    data: PROJECTS.map((project) => ({
      name: project.name,
      tag: project.tag,
      year: project.year,
      description: project.desc,
      image: project.image,
      color: project.color,
      accent: project.accent,
      usersId: user.id,
    })),
  });

  await prisma.experiences.createMany({
    data: EXPERIENCE.map((exp) => ({
      role: exp.role,
      org: exp.org,
      period: exp.period,
      description: exp.desc,
      usersId: user.id,
    })),
  });

  await prisma.certifications.createMany({
    data: CERTS.map((cert) => ({
      name: cert.name,
      year: cert.year,
      issuer: cert.issuer,
      usersId: user.id,
    })),
  });

  const users = await prisma.users.findMany();
  console.log("Seeded data:", JSON.stringify(users, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
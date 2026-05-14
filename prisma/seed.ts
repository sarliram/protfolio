import prisma from "../src/lib/prisma.server";
import {
  user,
  meta,
  project,
  education,
  experience,
  testimonial,
} from "../data/seed";

const records = process.argv[2] ? parseInt(process.argv[2], 10) : 10;

async function main() {
  await prisma.user.deleteMany();
  await prisma.meta.deleteMany();
  await prisma.project.deleteMany();
  await prisma.education.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.testimonial.deleteMany();

  await prisma.user.createMany({
    data: user(),
  });

  await prisma.meta.createMany({
    data: meta(records),
  });

  await prisma.project.createMany({
    data: project(records),
  });

  await prisma.education.createMany({
    data: education(records),
  });

  await prisma.experience.createMany({
    data: experience(records),
  });

  await prisma.testimonial.createMany({
    data: testimonial(records),
  });
}

main()
  .catch(async (error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

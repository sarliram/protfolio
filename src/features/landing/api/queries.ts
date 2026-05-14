import { createServerFn } from "@tanstack/react-start";
import { prisma } from "@/lib/prisma.server";

export const initializeData = createServerFn({ method: "GET" }).handler(
  async () => {
    //   try {
    const meta = await prisma.meta.findFirst({});
    const projects = await prisma.project.findMany({});
    const educations = await prisma.education.findMany({});
    const experiences = await prisma.experience.findMany({});
    const testimonials = await prisma.testimonial.findMany({});

    return { meta, projects, educations, experiences, testimonials };
    //   } catch (error) {
    //     if (isBootstrapQueryError(error)) {
    //       return {
    //         meta: null,
    //         projects: [],
    //         educations: [],
    //         experiences: [],
    //         testimonials: [],
    //       };
    //     }

    //     throw error;
    //   }
  },
);

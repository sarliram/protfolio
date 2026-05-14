import prisma from "@/lib/prisma.server";
import { createServerFn } from "@tanstack/react-start";
import { searchSchema, idSchema } from "@/lib/schemas";

export const getAll = createServerFn({ method: "GET" }).handler(async () => {
  return prisma.testimonial.findMany();
});

export const getByPagination = createServerFn({ method: "GET" })
  .inputValidator(searchSchema)
  .handler(async ({ data: query }) => {
    const { page, limit, sort, sortBy } = query;
    const [data, total] = await prisma.$transaction([
      prisma.testimonial.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sort,
        },
      }),
      prisma.testimonial.count(),
    ]);
    return { data, total };
  });

export const getById = createServerFn({ method: "GET" })
  .inputValidator(idSchema)
  .handler(async ({ data }) => {
    return await prisma.testimonial.findUnique({
      where: data,
    });
  });

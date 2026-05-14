import { createServerFn } from "@tanstack/react-start";
import prisma from "@/lib/prisma.server";
import { idSchema } from "@/lib/schemas";
import { createSchema, updateSchema } from "../schemas";

export const create = createServerFn({ method: "GET" })
  .inputValidator(createSchema)
  .handler(async ({ data }) => {
    try {
      return await prisma.testimonial.create({
        data,
      });
    } catch (error) {
      throw error;
    }
  });

export const update = createServerFn({ method: "GET" })
  .inputValidator(updateSchema)
  .handler(async ({ data }) => {
    try {
      const { id, ...others } = data;
      return await prisma.testimonial.update({
        data: others,
        where: { id: data.id },
      });
    } catch (error) {
      throw error;
    }
  });

export const deleteById = createServerFn({ method: "GET" })
  .inputValidator(idSchema)
  .handler(async ({ data }) => {
    try {
      return await prisma.testimonial.delete({
        where: data,
      });
    } catch (error) {
      throw error;
    }
  });

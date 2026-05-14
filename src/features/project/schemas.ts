import { z } from "zod";

export const createSchema = z.object({
  image: z.string().nullable().optional(),
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  link: z.string().nullable().optional(),
});

export const updateSchema = createSchema.extend({
  id: z.number(),
});

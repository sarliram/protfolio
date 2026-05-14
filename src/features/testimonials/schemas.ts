import { z } from "zod";

export const createSchema = z.object({
  name: z.string().nullable().optional(),
  company: z.string().nullable().optional(),
  position: z.string().nullable().optional(),
  message: z.string().nullable().optional(),
});

export const updateSchema = createSchema.extend({
  id: z.number(),
});

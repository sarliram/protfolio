import { z } from "zod";

export const createSchema = z.object({
  title: z.string().nullable().optional(),
  startDate: z.date().default(new Date()).nullable().optional(),
  endDate: z.date().default(new Date()).nullable().optional(),
  description: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
});

export const updateSchema = createSchema.extend({
  id: z.number(),
});

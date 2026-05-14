import { z } from "zod";

export const createSchema = z.object({
  company: z.string().nullable().optional(),
  position: z.string().nullable().optional(),
  startDate: z.date().default(new Date()).nullable().optional(),
  endDate: z.date().default(new Date()).nullable().optional(),
});

export const updateSchema = createSchema.extend({
  id: z.number(),
});

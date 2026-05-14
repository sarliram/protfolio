import { z } from "zod";

export const updateSchema = z.object({
  id: z.number(),
  image: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  profession: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  quoteTitle: z.string().nullable().optional(),
  quoteDescription: z.string().nullable().optional(),
  footerDescription: z.string().nullable().optional(),
  githubUrl: z.string().nullable().optional(),
  linkedInUrl: z.string().nullable().optional(),
});

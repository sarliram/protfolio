import { z } from "zod";
import { defaultValues } from "./utils";

const { PAGE, LIMIT, SORTBY, SORT } = defaultValues();

export const searchSchema = z.object({
  page: z.coerce.number().default(PAGE),
  limit: z.coerce.number().default(LIMIT),
  sortBy: z.string().default(SORTBY),
  sort: z.string().default(SORT),
});

export const idSchema = z.object({
  id: z.coerce.number(),
});

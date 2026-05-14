import "dotenv/config";
import {
  PrismaClient,
  type Meta,
  type Education,
  type Experience,
  type Project,
  type Testimonial,
} from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

console.log("PRISMA ADAPTER ARE", {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma, Meta, Education, Experience, Project, Testimonial };
export default prisma;

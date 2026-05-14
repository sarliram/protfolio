import prisma from "@/lib/prisma.server";
import { s3Client } from "@/lib/s3";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { createServerFn } from "@tanstack/react-start";

export const getData = createServerFn({ method: "GET" }).handler(async () => {
  return prisma.meta.findFirst();
});

export const getFiles = async () => {
  const command = new ListObjectsCommand({
    Bucket: "portfolio-945936200342-ap-southeast-1-an",
  });
  try {
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    throw error;
  }
};

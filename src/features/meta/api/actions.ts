import { createServerFn } from "@tanstack/react-start";
import prisma from "@/lib/prisma.server";
import { updateSchema } from "../schemas";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/s3";
import { Buffer } from "buffer";

const BUCKET_NAME = process.env.BUCKET_NAME || "",
  REGION = process.env.REGION || "";

export const update = createServerFn({ method: "GET" })
  .inputValidator(updateSchema)
  .handler(async ({ data }) => {
    try {
      const { id, ...others } = data;
      return await prisma.meta.update({
        data: others,
        where: { id: data.id },
      });
    } catch (error) {
      throw error;
    }
  });

export const uploadFile = createServerFn({ method: "POST" })
  .inputValidator((data: FormData) => data)
  .handler(async ({ data }) => {
    try {
      const file = data.get("file");
      if (!(file instanceof File)) {
        throw new Error("No valid file uploaded");
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      const key = `meta/${file.name}`;
      const command = new PutObjectCommand({
        Bucket: BUCKET_NAME || "",
        Key: key,
        Body: buffer,
        ContentType: file.type || "application/octet-stream",
      });

      await s3Client.send(command);
      return `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${key}`;
    } catch (error) {
      throw error;
    }
  });

export const deleteFile = createServerFn({ method: "POST" })
  .inputValidator((data: { file_name: string }) => data)
  .handler(async ({ data }) => {
    try {
      const { file_name } = data;

      let key = file_name;

      // If full URL is passed, extract only the S3 key
      if (file_name.startsWith("http")) {
        const url = new URL(file_name);
        key = decodeURIComponent(url.pathname.slice(1));
      }

      if (!key) {
        throw new Error("Missing S3 object key");
      }

      return await s3Client.send(
        new DeleteObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
        }),
      );
    } catch (error) {
      throw error;
    }
  });

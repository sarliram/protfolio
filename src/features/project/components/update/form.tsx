import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FieldGroup } from "@/components/ui/field";
import { InputText, Photo } from "@/components/form";
import { updateSchema } from "../../schemas";
import { Button as LoadingButton } from "@/components/button";
import { Project } from "@/lib/prisma.server";
import { update, uploadFile, deleteFile } from "../../api/actions";
import { useRouter } from "@tanstack/react-router";
import { handleToastError } from "@/lib/utils";

interface Props {
  data: Project;
  onClose: () => void;
}

type Update = z.input<typeof updateSchema>;

export const Form = (props: Props) => {
  const { data, onClose } = props;
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const modifiedData = {
    id: data.id,
    title: data.title ?? undefined,
    description: data.description ?? undefined,
    link: data.link ?? undefined,
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const form = useForm<Update>({
    resolver: zodResolver(updateSchema),
    defaultValues: modifiedData,
  });

  const {
    control,
    formState: { isDirty, isValid },
    watch,
  } = form;
  const image = watch("image");

  const handleUpload = async (data: FormData) => {
    return await uploadFile({ data });
  };

  const handleDelete = async () => {
    if (image === null || image === undefined) return;
    return await deleteFile({
      data: {
        file_name: image,
      },
    });
  };

  const onSubmit = async (data: Update) => {
    try {
      setIsPending(true);
      await update({ data });
      router.invalidate();
      onClose();
    } catch (error) {
      handleToastError(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="py-4">
        <FieldGroup>
          <div className="w-[200px] h-[200px]">
            <Photo
              control={control}
              name={"image"}
              label="Featured Image"
              handleUpload={handleUpload}
              handleDelete={handleDelete}
            />
          </div>
          <InputText control={control} name="title" label="Title" />
          <InputText control={control} name="description" label="Description" />
          <InputText control={control} name="link" label="Link" />
        </FieldGroup>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <LoadingButton
          isLoading={isPending}
          disabled={!isValid || !isDirty}
          label="Update"
          type="submit"
        />
      </DialogFooter>
    </form>
  );
};

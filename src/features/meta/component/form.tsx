import { useEffect, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FieldGroup } from "@/components/ui/field";
import { InputText, Textarea, Photo } from "@/components/form";
import { updateSchema } from "../schemas";
import { Button as LoadingButton } from "@/components/button";
// import { Update } from "../types";
import { Meta } from "@/lib/prisma.server";
import { update } from "../api/actions";
import { handleToastError } from "@/lib/utils";
import { uploadFile, deleteFile } from "../api/actions";

interface Props {
  data: Meta;
}

type Update = z.input<typeof updateSchema>;

export const Form = (props: Props) => {
  const { data } = props;
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const form = useForm<Update>({
    resolver: zodResolver(updateSchema),
    defaultValues: data,
  });
  const {
    control,
    formState: { isDirty, isValid },
    watch,
    reset,
  } = form;
  const image = watch("image");

  useEffect(() => {
    handleReset();
  }, [data]);

  const handleReset = () => {
    reset({
      ...data,
    });
  };

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
          <InputText control={control} name="name" label="Name" />
          <InputText control={control} name="profession" label="Profession" />
          <Textarea control={control} name="bio" label="Bio" />
          <Textarea control={control} name="quoteTitle" label="Quote Title" />
        </FieldGroup>
      </div>

      <Button variant="outline" onClick={handleReset}>
        Reset
      </Button>
      <LoadingButton
        isLoading={isPending}
        disabled={!isValid || !isDirty}
        label="Update"
        type="submit"
      />
    </form>
  );
};

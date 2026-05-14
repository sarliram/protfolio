import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FieldGroup } from "@/components/ui/field";
import { DatePicker, InputText } from "@/components/form";
import { updateSchema } from "../../schemas";
import { Button as LoadingButton } from "@/components/button";
import { Experience } from "@/lib/prisma.server";
import { update } from "../../api/actions";
import { useRouter } from "@tanstack/react-router";
import { handleToastError } from "@/lib/utils";

type Update = z.input<typeof updateSchema>;

interface Props {
  data: Experience;
  onClose: () => void;
}

export const Form = (props: Props) => {
  const { data, onClose } = props;
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const modifiedData = {
    id: data.id,
    company: data.company ?? undefined,
    position: data.position ?? undefined,
    startDate: data.startDate ?? undefined,
    endDate: data.endDate ?? undefined,
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
  } = form;

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
          <InputText control={control} name="company" label="Title" />
          <InputText control={control} name="position" label="Position" />
          <DatePicker name="startDate" title="Start At" form={form} />
          <DatePicker name="endDate" title="End At" form={form} />
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

import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldGroup } from "@/components/ui/field";
import { DatePicker, InputText } from "@/components/form";
import { Button as LoadingButton } from "@/components/button";
import { createSchema } from "../schemas";
import { create } from "../api/actions";
import { handleToastError } from "@/lib/utils";

type CreateTypes = z.input<typeof createSchema>;

export const Create = () => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const form = useForm<CreateTypes>({
    resolver: zodResolver(createSchema),
    defaultValues: createSchema.parse({}),
  });

  const {
    control,
    formState: { isValid, isDirty },
    reset,
  } = form;

  const onSubmit = async (data: CreateTypes) => {
    try {
      setIsPending(true);
      await create({ data });
      router.invalidate();
      reset();
      setOpen(false);
    } catch (error) {
      handleToastError(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>New Record</DialogTitle>
            <DialogDescription>
              Please enter the amount and currency.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <FieldGroup>
              <InputText control={control} name="title" label="Title" />
              <DatePicker name="startDate" title="Start At" form={form} />
              <DatePicker name="endDate" title="End At" form={form} />
              <InputText
                control={control}
                name="description"
                label="Description"
              />
              <InputText control={control} name="location" label="Location" />
            </FieldGroup>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <LoadingButton
              type="submit"
              isLoading={isPending}
              disabled={!isValid || !isDirty}
              label="Save"
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

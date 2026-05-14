"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field, FieldDescription } from "@/components/ui/field";
import { UseFormReturn, FieldValues, Path, Controller } from "react-hook-form";
import { Label } from "../ui/label";

type Props<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>; // Ensure `name` is typed as `Path<TFieldValues>`
  title: string;
  form: UseFormReturn<TFieldValues>;
  description?: string;
};

export const DatePicker = <TFieldValues extends FieldValues>({
  name,
  title,
  form,
  description,
}: Props<TFieldValues>) => {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <Field className="w-full flex flex-col">
          <Label>{title}</Label>
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground",
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FieldDescription>{description}</FieldDescription>
        </Field>
      )}
    />
  );
};

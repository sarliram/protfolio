import { Props } from "./type";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Field, FieldError } from "../ui/field";
import { Label } from "@/components/ui/label";

export const InputNumber = ({
  name,
  control,
  label,
  placeholder,
  autoFocus,
  ref,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Field data-invalid={fieldState.invalid}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              autoFocus={autoFocus}
              type="number"
              {...field}
              ref={ref}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
};

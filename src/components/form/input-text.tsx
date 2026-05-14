import { Props } from "./type";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Field, FieldError } from "../ui/field";
import { Label } from "@/components/ui/label";

export const InputText = ({
  name,
  control,
  label,
  placeholder,
  autoFocus,
  ref,
  disabled,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <Label htmlFor={name}>{label}</Label>
          <Input
            type="text"
            autoFocus={autoFocus}
            {...field}
            ref={ref}
            placeholder={placeholder}
            aria-invalid={fieldState.invalid}
            disabled={disabled}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

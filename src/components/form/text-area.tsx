import { Props } from "./type";
import { Controller } from "react-hook-form";
import { Textarea as STextarea } from "../ui/textarea";
import { Field, FieldError } from "../ui/field";
import { Label } from "@/components/ui/label";

export const Textarea = ({
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

          <STextarea
            {...field}
            autoFocus={autoFocus}
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

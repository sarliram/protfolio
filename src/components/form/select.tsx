import { Controller } from "react-hook-form";
import {
  Select as ShadCnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError } from "../ui/field";
import { Label } from "@/components/ui/label";
import { Props } from "./type";

export const Select = (props: Props) => {
  const { name, control, label, options, disabled } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <Label htmlFor={name}>{label}</Label>
          <ShadCnSelect
            value={value}
            onValueChange={onChange}
            disabled={disabled}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options?.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </ShadCnSelect>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

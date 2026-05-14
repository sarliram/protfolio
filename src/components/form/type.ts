export interface Props {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "standard" | "outlined" | "filled";
  ref?: any;
  options?: {
    value: string;
    label: string;
  }[];
}

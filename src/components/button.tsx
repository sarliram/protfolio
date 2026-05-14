import { Button as SButton } from "./ui/button";
import { Spinner } from "./ui/spinner";

type Props = React.ComponentProps<typeof SButton> & {
  label: string;
  isLoading?: boolean;
};

export const Button = (props: Props) => {
  const { label, isLoading } = props;
  return (
    <SButton {...props}>
      {isLoading && <Spinner data-icon="inline-start" />}
      {label}
    </SButton>
  );
};

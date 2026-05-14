import { Meta } from "@/generated/prisma/browser";
import { Form } from "./form";

interface Props {
  data: Meta;
}
export const MainComponent = (props: Props) => {
  const { data } = props;
  return (
    <div className="max-w-lg">
      <Form data={data} />
    </div>
  );
};

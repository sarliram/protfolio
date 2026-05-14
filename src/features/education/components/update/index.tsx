import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "./form";
import { getById } from "../../api/queries";
import { Education } from "@/lib/prisma.server";

interface Props {
  id: number;
  open: boolean;
  onClose: () => void;
}

export const Update = (props: Props) => {
  const { id, open, onClose } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Education | null>(null);

  useEffect(() => {
    initializeData();
  }, [id, open]);

  const initializeData = async () => {
    if (open) {
      if (id) {
        setLoading(true);
        const result = await getById({ data: { id } });
        setData(result);
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update Record</DialogTitle>
          <DialogDescription>
            Please update the amount and currency.
          </DialogDescription>
        </DialogHeader>
        {loading ? (
          <>"loading the data...."</>
        ) : data !== undefined && data !== null ? (
          <Form data={data} onClose={onClose} />
        ) : (
          <p>{"Something went wrong"}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

import { useState, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type UseConfirmReturn = [
  ConfirmDialog: () => React.ReactNode | null,
  confirm: () => Promise<boolean>,
];

export function useConfirm(
  title: string,
  message: string,
  type: "default" | "destructive" = "default",
): UseConfirmReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [resolvePromise, setResolvePromise] =
    useState<(value: boolean) => void>();

  const confirm = useCallback(() => {
    setIsOpen(true);
    return new Promise<boolean>((resolve) => {
      setResolvePromise(() => resolve);
    });
  }, []);

  const handleConfirm = () => {
    setIsOpen(false);
    if (resolvePromise) resolvePromise(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    if (resolvePromise) resolvePromise(false);
  };

  const ConfirmDialog = () =>
    isOpen ? (
      <Dialog open onOpenChange={handleCancel}>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <p className="my-2">{message}</p>
          <DialogFooter>
            <Button onClick={handleCancel} variant={"outline"}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} variant={type}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ) : null;

  return [ConfirmDialog, confirm];
}

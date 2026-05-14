import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractYearFromDate = (date: Date | null) => {
  if (!date) return "";
  const d = new Date(date);
  return d.getFullYear();
};

export const defaultValues = () => {
  return {
    PAGE: 1,
    LIMIT: 10,
    LIMITS: [10, 20, 40, 60],
    SORTBY: "id",
    SORT: "desc",
    PERIODS: ["today", "week", "month", "year", "custom"] as const,
    DEFAULT_PERIOD: "month" as const,
    TRANSACTION_TYPES: ["expense", "income"],
    DEFAULT_TRANSACTION_TYPES: "expense",
  };
};

export const handleToastSuccess = (response: { detail: string }) => {
  toast.success(response.detail);
};

export const handleToastError = (error: any) => {
  toast.error((error as Error).message);
};

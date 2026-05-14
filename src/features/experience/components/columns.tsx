"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Experience } from "@/lib/prisma.server";

interface Props {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export const columns = (props: Props): ColumnDef<Experience>[] => {
  const { onDelete, onEdit } = props;
  return [
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Button
              size={"icon-sm"}
              variant={"outline"}
              aria-label="Delete"
              onClick={() => onDelete(row.original.id)}
            >
              <Trash />
            </Button>
            <Button
              variant={"outline"}
              size={"icon-sm"}
              aria-label="Edit"
              onClick={() => onEdit(row.original.id)}
            >
              <Pen />
            </Button>
          </div>
        );
      },
      size: 20,
    },
    {
      accessorKey: "company",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Company" />
      ),
      cell: ({ row }) => {
        const data = row.original;
        return <div className="text-left lowercase">{data?.company}</div>;
      },
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Start At" />
      ),
      cell: ({ row }) => {
        const date = row.getValue("startDate");
        return (
          <div className="text-left">
            {(date as Date)?.toLocaleDateString()}
          </div>
        );
      },
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="End At" />
      ),
      cell: ({ row }) => {
        const date = row.getValue("endDate");
        return (
          <div className="text-left">
            {(date as Date)?.toLocaleDateString()}
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => {
        const date = row.getValue("createdAt");
        return (
          <div className="text-left">
            {(date as Date)?.toLocaleDateString()}
          </div>
        );
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Updated At" />
      ),
      cell: ({ row }) => {
        const date = row.getValue("updatedAt");
        return (
          <div className="text-left">
            {(date as Date)?.toLocaleDateString()}
          </div>
        );
      },
    },
  ];
};

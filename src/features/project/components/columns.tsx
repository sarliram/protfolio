"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/prisma.server";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export const columns = (props: Props): ColumnDef<Project>[] => {
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
      accessorKey: "image",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Image" />
      ),
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="w-[40px]">
            <AspectRatio ratio={4 / 3} className="rounded-lg bg-muted">
              <img
                src={
                  data.image ??
                  "https://blocks.astratic.com/img/general-img-square.png"
                }
                alt={data.title ?? ""}
              />
            </AspectRatio>
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        const data = row.original;
        return <div className="text-left lowercase">{data?.title}</div>;
      },
    },
    {
      accessorKey: "link",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Link" />
      ),
      cell: ({ row }) => {
        const data = row.original;
        return <div className="text-left lowercase">{data?.link}</div>;
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

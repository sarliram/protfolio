"use client";
import { useState } from "react";
import { useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { Education } from "@/lib/prisma.server";
import { useConfirm } from "@/hooks/use-confirm";
import { deleteById } from "../api/actions";
import { Filter } from "./filter";
import { handleToastError } from "@/lib/utils";
import { Update } from "./update";

type Props = {
  data: Education[];
  total: number;
  params: {
    title: string | null;
  };
};

export const MainComponent = (props: Props) => {
  const { data, total } = props;
  const [update, setUpdate] = useState<number | null>(null);
  const search = useSearch({ from: "/dashboard/education" });
  const router = useRouter();
  const navigate = useNavigate();

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete",
    "Are you sure you want to delete?",
  );

  const handlePageChange = (page: number, limit: number) => {
    navigate({
      to: "/dashboard/education",
      search: {
        ...search,
        page,
        limit,
      },
    });
  };

  const onDelete = async (id: number) => {
    const ok = await confirm();
    if (!ok) return;
    try {
      await deleteById({ data: { id } });
      router.invalidate();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onEdit = (id: number) => {
    setUpdate(id);
  };

  return (
    <>
      <Filter />
      <div className="mt-4">
        <DataTable
          columns={columns({ onDelete, onEdit })}
          data={data}
          total={total}
          page={search.page}
          limit={search.limit}
          onPageChange={handlePageChange}
        />
      </div>

      {update && (
        <Update id={update} open={!!update} onClose={() => setUpdate(null)} />
      )}
      <ConfirmDialog />
    </>
  );
};

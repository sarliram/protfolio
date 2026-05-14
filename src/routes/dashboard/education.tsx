import { createFileRoute } from "@tanstack/react-router";
import { searchSchema } from "@/lib/schemas";
import { MainComponent } from "@/features/education/components";
import { getByPagination } from "@/features/education/api/queries";

export const Route = createFileRoute("/dashboard/education")({
  validateSearch: (search) => searchSchema.parse(search),
  loaderDeps: ({ search: query }) => ({ query }),
  loader: ({ deps: { query } }) => {
    return getByPagination({ data: query });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data, total } = Route.useLoaderData();

  return <MainComponent data={data} total={total} params={{ title: "" }} />;
}

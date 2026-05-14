import { createFileRoute } from "@tanstack/react-router";
import { searchSchema } from "@/lib/schemas";
import { MainComponent } from "@/features/testimonials/components";
import { getByPagination } from "@/features/testimonials/api/queries";

export const Route = createFileRoute("/dashboard/testimonials")({
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

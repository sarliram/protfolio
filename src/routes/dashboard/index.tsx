import { createFileRoute } from "@tanstack/react-router";
import { getData } from "@/features/meta/api/queries";
import { MainComponent } from "@/features/meta/component";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  loader: () => {
    return getData();
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  if (data === null) return null;
  return <MainComponent data={data} />;
}

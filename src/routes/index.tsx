import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Projects,
  Educations,
  Quots,
  Experiences,
  Testimonials,
  Footer,
} from "@/features/landing/components";
import { initializeData } from "@/features/landing/api/queries";

export const Route = createFileRoute("/")({
  loader: async () => initializeData(),
  head: () => ({
    meta: [],
  }),
  component: Home,
});

function Home() {
  const response = Route.useLoaderData();
  const { meta, projects, educations, experiences, testimonials } = response;

  return (
    <div>
      <Hero data={meta} />
      <Projects data={projects} />
      <Educations data={educations} />
      <Quots data={meta} />
      <Experiences data={experiences} />
      <Testimonials data={testimonials} />
      <Footer data={meta} />
    </div>
  );
}

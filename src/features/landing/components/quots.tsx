import { Meta } from "@/lib/prisma.server";

type Props = {
  data: Meta | null;
};

export const Quots = (props: Props) => {
  const { data } = props;
  if (data === null) return null;
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-40">
            {data.quoteTitle}
          </h1>
          <p className="font-medium text-gray-700 text-xs md:text-base px-8 lg:px-56">
            {data.quoteDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

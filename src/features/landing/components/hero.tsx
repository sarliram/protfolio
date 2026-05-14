import { Meta } from "@/lib/prisma.server";

type Props = {
  data: Meta | null;
};
export const Hero = (props: Props) => {
  const { data } = props;

  if (data === null) return null;

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-32">
          <div />
          <a
            href="https://drive.google.com/file/d/1InsZk8TbcIvMYDL9ep4ewABkA8zO7XLt/view?usp=sharing"
            target="_blank"
            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500 border"
          >
            Get my CV
          </a>
        </nav>

        <div className="text-center">
          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            {data.name}
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            {data.profession}
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            {data.bio}
          </p>

          <a
            href="#"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};

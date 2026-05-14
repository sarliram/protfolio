import { Testimonial } from "@/lib/prisma.server";

type Props = {
  data: Testimonial[];
};

export const Testimonials = (props: Props) => {
  const { data } = props;
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Testimonial
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the places I studied
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => {
            return (
              <div key={item.id} className="bg-gray-50 px-8 py-10 rounded-md">
                <p className="font-normal text-gray-500 text-md mb-4">
                  {item.message}
                </p>

                <h6 className="font-semibold text-gray-500 text-md">
                  {item.name}
                  <span className="font-medium text-gray-300 text-sm">
                    - {item.position} at {item.company}
                  </span>
                </h6>
              </div>
            );
          })}
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark{" "}
              <span className="font-medium text-gray-300 text-sm">
                - CEO at EarlyBird
              </span>
            </h6>
          </div>

          {/* <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
              labore et dolore magna aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span>
            </h6>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
              labore et dolore magna aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span>
            </h6>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
              labore et dolore magna aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span>
            </h6>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
              labore et dolore magna aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span>
            </h6>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut
              labore et dolore magna aliqua.
            </p>

            <h6 className="font-semibold text-gray-500 text-md">
              Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span>
            </h6>
          </div> */}
        </div>
      </div>
    </section>
  );
};

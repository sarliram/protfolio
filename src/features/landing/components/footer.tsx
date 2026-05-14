import { Meta } from "@/lib/prisma.server";
// import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { Link } from "@tanstack/react-router";
type Props = {
  data: Meta | null;
};

export const Footer = (props: Props) => {
  const { data } = props;
  if (data === null) return null;
  return (
    <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <p className="font-normal text-gray-400 text-md  md:text-lg mb-20">
            {data.footerDescription}
          </p>

          <div className="flex items-center justify-center space-x-8">
            {/* <Link href={data.githubUrl ?? "#"} target="_blank">
              <GitHubLogoIcon className="w-10 h-10" />
            </Link>

            <Link href={data.linkedInUrl ?? "#"} target="_blank">
              <LinkedInLogoIcon className="w-10 h-10" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

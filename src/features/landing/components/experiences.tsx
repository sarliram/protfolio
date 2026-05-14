import { Experience } from "@/lib/prisma.server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  data: Experience[];
};

export const Experiences = (props: Props) => {
  const { data } = props;
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Experience
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10">
          Below is a summary of the places I worked at and the positions I held.
        </p>
        <Table>
          {/* <TableCaption></TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[200px]">Company</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="text-right">Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => {
              return (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.company}</TableCell>
                  <TableCell>{d.position}</TableCell>
                  <TableCell className="text-right">
                    {d.startDate?.getFullYear()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

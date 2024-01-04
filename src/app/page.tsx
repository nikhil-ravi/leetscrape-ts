import Link from "next/link";
import { getSolutions } from "@/db/solutions";

export default function SolutionsPage() {
  let allSolutions = getSolutions();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my leetcode solutions
      </h1>
      {allSolutions
        .sort((a, b) => {
          if (a.metadata.qid > b.metadata.qid) {
            return -1;
          }
          return 1;
        })
        .map((solution) => (
          <Link
            key={solution.slug}
            className="flex flex-col text-neutral-900 dark:text-neutral-100 tracking-tight mb-2 space-y-1"
            href={`/solutions/${solution.slug}`}
          >
            {solution.metadata.qid}. {solution.metadata.title}
          </Link>
        ))}
    </section>
  );
}

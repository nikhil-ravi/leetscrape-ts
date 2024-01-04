import { CustomMDX } from "@/components/mdx";
import { getSolutions } from "@/db/solutions";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let solution = getSolutions().find(
    (solution) => solution.slug === params.slug
  );
  if (!solution) return;

  let { qid, title, difficulty, tags } = solution.metadata;

  return {
    title,
    description: `My solution to Leetcode #${qid} ${title}`,
    keywords: tags,
    openGraph: {
      title,
      description: `My solution to Leetcode #${qid} ${title}`,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions/${solution.slug}`,
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  let solution = getSolutions().find(
    (solution) => solution.slug === params.slug
  );
  if (!solution) notFound();

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: solution.metadata.title,
            description: `My solution to Leetcode #${solution.metadata.qid} ${solution.metadata.title}`,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions/${solution.slug}`,
            author: {
              "@type": "Person",
              name: process.env.NEXT_PUBLIC_AUTHOR_NAME,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {solution.metadata.title}
      </h1>
      <p className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        {solution.metadata.difficulty}
      </p>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={solution.content} />
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  return getSolutions().map((solution) => ({
    params: {
      slug: solution.slug,
    },
  }));
}

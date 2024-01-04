# Leetscrape TS

This is simple [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Given `.mdx` files in the [solutions](./src/content/solutions/) directory, this renders each file, which is intended to contain solutions to a single Leetcode question, as a standalone webpage at `SITE_URL/solutions/{question-slug}`.

This is a companion template for the [Leetscrape](https://www.github.com/nikhil-ravi/leetscrape) Python package. You may use that package to generate code stubs for non-premium Leetcode questions to develop locally and then generate `.mdx` files for use with this project.

## Getting Started

### Standalone usage

1. First, clone this repository:

   ```bash
   git clone https://www.github.com/nikhil-ravi/leetscrape-ts
   ```

2. Then, install dependencies:

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    # or
    bun install
    ````

3. Place your `.mdx` files in the [solutions](./src/content/solutions/) directory. The file's frontmatter should contain the following fields:

    ```yaml
    ---
    qid: 1
    title: "Two Sum"
    titleSlug: "two-sum"
    difficulty: "Easy"
    tags: ["array", "hashmap"]
    ---
    ```
    The `qid` field is Leetcode's question ID.    The `title` field is the title of the question. The `titleSlug` field is the URL slug for the question. The `difficulty` field is the difficulty of the question. The `tags` field is a list of topic tags for the question. All these fields can be found in the Leetcode question page.

4. Populate an `.env.local` file using example [`.env.example`](.env.example) file:
    
    ```.env
    NEXT_PUBLIC_SITE_URL=
    NEXT_PUBLIC_AUTHOR_NAME=
    NEXT_PUBLIC_SITE_NAME=
    ```

5. Populate the external links that appear in the nav bar in the [external-links.ts](./src/content/external-links.ts) file.

6. Then, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage with Leetscrape

1. First, install the [Leetscrape](https://www.github.com/nikhil-ravi/leetscrape) Python package:

    ```bash
    pip install leetscrape
    ```
2. Then, run the following command to generate a code stub for a Leetcode question. For example:

    ```bash
    leetscrape question -q 1
    ```
    This will generate a file named `q_0001_twoSum.py` in the current directory. See the [Leetscrape](https://www.github.com/nikhil-ravi/leetscrape) repository for more options.
3. Edit the generated file to add your solution.
4. Then, run the following command to generate a `.mdx` file for the question:

    ```bash
    leetscrape solution -i q_0001_twoSum.py -o <path-to-leetcode-ts-project>/src/content/solutions
    ```
    This will generate a file named `q_0001_twoSum.mdx` in the [solutions](./src/content/solutions/) directory. See the [Leetscrape](https://www.github.com/nikhil-ravi/leetscrape) repository for more options.
    
    Alternatively, you can pass the directory path containing your solutions to generate `.mdx` files for all the solutions in that directory:
    
    ```bash
    leetscrape solution -i <path-to-solutions-directory> -o <path-to-leetcode-ts-project>/src/content/solutions
    ```
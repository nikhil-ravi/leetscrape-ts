import fs from 'fs';
import path from 'path';

type Metadata = {
    qid: string;
    title: string;
    titleSlug: string;
    difficulty: string;
    tags: string;
}


function parseFrontmatter(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, '').trim();
    let frontMatterLines = frontMatterBlock.trim().split('\n');
    let metadata: Partial<Metadata> = {};

    frontMatterLines.forEach(line => {
        let [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf8');
    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map(file => {
        let { metadata, content } = readMDXFile(path.join(dir, file));
        let slug = metadata.titleSlug;
        return {
            metadata, slug, content
        }
    })
}

export function getSolutions() {
    return getMDXData(path.join(process.cwd(), 'src/content/solutions'));
}
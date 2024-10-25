"use client";

import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import CodeCopy from "./code-copy";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  title?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    const highlight = async () => {
      const highlighted = await highlightCode(code, theme);
      setHighlightedCode(highlighted);
    };

    highlight();
  }, [code, theme]);

  return (
    <div className="relative">
      <div className="absolute top-3 right-4">
        <CodeCopy code={code} />
      </div>
      <section
        className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-b-xl selection:bg-white/20 overflow-auto max-h-96 rounded-xl"
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      />
    </div>
  );
}

async function highlightCode(code: string, theme: string | undefined) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: false,
      theme: theme === "light" ? "github-light" : "vesper",
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
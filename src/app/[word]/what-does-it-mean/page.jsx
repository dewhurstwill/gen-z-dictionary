import { getWord, getAllWords } from "@/lib/dictionary";
import WhatDoesItMean from "@/components/WhatDoesItMean";

export async function generateStaticParams() {
  const words = getAllWords();
  return words.map((word) => ({ word }));
}

export async function generateMetadata({ params }) {
  const word = getWord(params.word);
  if (!word) return { title: "Word Not Found" };

  return {
    title: `What does ${word.word} mean? - GenZ Dictionary`,
    description: `Learn the meaning of ${word.word} in GenZ slang.`,
    openGraph: {
      title: `What does ${word.word} mean? - GenZ Dictionary`,
      description: `Learn the meaning of ${word.word} in GenZ slang.`,
    },
    twitter: {
      card: "summary",
      title: `What does ${word.word} mean? - GenZ Dictionary`,
      description: `Learn the meaning of ${word.word} in GenZ slang.`,
    },
  };
}

export default function WhatDoesItMeanPage() {
  <WhatDoesItMean />;
}

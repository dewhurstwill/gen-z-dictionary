import Word from "@/components/Word";
import { getWord, getAllWords } from "@/lib/dictionary";

export async function generateStaticParams() {
  const words = getAllWords();
  return words.map((word) => ({ word }));
}

export async function generateMetadata({ params }) {
  const word = getWord(params.word);
  if (!word) return { title: "Word Not Found" };

  return {
    title: `${word.word} - GenZ Dictionary`,
    description: word.definition,
    openGraph: {
      title: `${word.word} - GenZ Dictionary`,
      description: word.definition,
    },
    twitter: {
      card: "summary",
      title: `${word.word} - GenZ Dictionary`,
      description: word.definition,
    },
  };
}

export default function WordPage() {
  return <Word />;
}

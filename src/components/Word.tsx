"use client";
import { notFound, useParams } from "next/navigation";
import WordCard from "@/components/WordCard";
import { getWord } from "@/lib/dictionary";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Word() {
  const { word: inputWord } = useParams();
  const word = getWord(inputWord as string);

  if (!word) {
    notFound();
  }

  return (
    <main className="space-y-6 max-w-2xl mx-auto">
      <WordCard word={word} />
      <Button asChild className="w-full">
        <Link href={`/${inputWord}/what-does-it-mean`}>
          What does {word.word} mean?
        </Link>
      </Button>
    </main>
  );
}

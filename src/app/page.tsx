import SearchBar from "@/components/SearchBar";
import WordCard from "@/components/WordCard";
import { getRandomWord } from "@/lib/dictionary";

export default function Home() {
  const wordOfDay = getRandomWord();

  return (
    <main className="space-y-6 max-w-2xl mx-auto">
      <SearchBar />
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Word of the Day 🔥
        </h2>
        <WordCard word={wordOfDay} />
      </section>
    </main>
  );
}

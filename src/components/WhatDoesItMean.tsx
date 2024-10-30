"use client";
import { notFound, useParams } from "next/navigation";
import { getWord } from "@/lib/dictionary";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatDoesItMean() {
  const { word: inputWord } = useParams();
  const word = getWord(inputWord as string);

  if (!word) {
    notFound();
  }

  return (
    <main className="space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            What does {word.word} mean?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl">{word.definition}</p>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Origin:</h3>
            <p>{word.origin}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Examples:</h3>
            <ul className="list-disc pl-6">
              {word.examples.map((example, index) => (
                <li key={index} className="mb-2">
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Variations:</h3>
            <ul className="list-disc pl-6">
              {word.variations.map((variation, index) => (
                <li key={index}>{variation}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <Button asChild className="w-full">
        <Link href={`/${inputWord}`}>Back to {word.word}</Link>
      </Button>
    </main>
  );
}

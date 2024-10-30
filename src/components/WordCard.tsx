import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Word {
  word: string;
  definition: string;
  origin: string;
  examples: string[];
  variations: string[];
}

export default function WordCard({ word }: { word: Word }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">
          <Link
            href={`/${word.word.toLowerCase()}`}
            className="hover:underline"
          >
            {word.word}
          </Link>
        </CardTitle>
        <CardDescription className="text-lg">{word.definition}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="origin">
            <AccordionTrigger>Origin</AccordionTrigger>
            <AccordionContent>{word.origin}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="examples">
            <AccordionTrigger>Examples</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4">
                {word.examples.map((example, index) => (
                  <li key={index} className="mb-2">
                    {example}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="variations">
            <AccordionTrigger>Variations</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4">
                {word.variations.map((variation, index) => (
                  <li key={index} className="mb-2">
                    {variation}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ThumbsUp className="mr-2 h-4 w-4" /> Like
          </Button>
          <Button variant="outline" size="sm">
            <ThumbsDown className="mr-2 h-4 w-4" /> Dislike
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
}

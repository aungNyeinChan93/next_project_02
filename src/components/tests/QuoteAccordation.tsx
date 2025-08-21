import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Quote } from "@/app/tests/quotes/page";

interface Props {
  quotes: Quote[];
}
const QuoteAccordation = ({ quotes }: Props) => {
  return (
    <React.Fragment>
      <section className="px-10 py-2 bg-green-50 m-3 rounded">
        {quotes &&
          Array.isArray(quotes) &&
          quotes?.map((quote) => (
            <Accordion key={quote.id} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="text-red-600 text-xl">
                    {" "}
                    {quote?.author || `Is it accessible?`}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="text-lg font-semibold">
                    {" "}
                    {quote?.quote ||
                      ` Yes. It adheres to the WAI-ARIA design pattern.`}
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </section>
    </React.Fragment>
  );
};

export default QuoteAccordation;

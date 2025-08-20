import React from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quote: any;
}

const QuoteCard = ({ quote }: Props) => {
  return (
    <React.Fragment>
      <section>
        <article className="w-120 bg-gray-900/90 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
          <p className="text-lg text-green-400 underline underline-offset-8 decoration-green-500 mb-4">
            {quote.author}
          </p>

          <p className="text-md w-full text-red-400">
            {quote.quote ??
              ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget massa interdum, rhoncus ex dignissim, ultricies tellus. Proin
            convallis mauris ut est pulvinar aliquet. Nulla facilisi.`}
          </p>
        </article>
      </section>
    </React.Fragment>
  );
};

export default QuoteCard;

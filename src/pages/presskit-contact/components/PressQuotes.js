import {useOutletContext} from "react-router-dom";
import {
  useAllPrismicDocumentsByType, 
  PrismicRichText
} from "@prismicio/react";

export const PressQuotes = () => {
  const [language] = useOutletContext();
  const [pressData] = useAllPrismicDocumentsByType('press');
  const quotes = pressData?.map((item) => {
    const quoteFrench = item.data.press_quote_french;
    const quoteEnglish = item.data.press_quote_english;
    const quote = language === 'french' ?
      quoteFrench : quoteEnglish;
    const source = item.data.press_source;
    const hasQuote = Boolean(quote.length !== 0);
    const hasSource = Boolean(source.length !== 0);
  
    return (
      <div key={item.id}>
        <PrismicRichText field={hasQuote ? quote : ''} />
        <PrismicRichText field={hasSource ? source : ''} />
      </div>
    );
  });

  return quotes;
};

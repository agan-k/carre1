import {useOutletContext} from "react-router-dom";
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {Box} from "../../../shared";
import QuotedText from '../../QuotedText';
import {SourceWrapper, PresskitContactContainer} from "./styled";

export const PressQuotes = () => {
  const [language] = useOutletContext();
  const [pressData] = useAllPrismicDocumentsByType('press');

  const quotes = pressData?.map((item) => {
    const quoteFrench = item.data.press_quote_french;
    const quoteEnglish = item.data.press_quote_english;
    const quote = language === 'french' ?
      quoteFrench[0].text : quoteEnglish[0].text;
    const source = item.data.press_source[0].text;
    const hasQuote = Boolean(quote.length !== 0);
    const hasSource = Boolean(source.length !== 0);
    return (
      <Box key={item.id} mb={4}>
        {hasQuote ? <QuotedText>{quote}</QuotedText> : ''}
        {hasSource ? <SourceWrapper>~ {source}</SourceWrapper> : ''}
      </Box>
    );
  });

  return <PresskitContactContainer>{quotes}</PresskitContactContainer>;
};

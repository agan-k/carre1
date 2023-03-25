import {useOutletContext} from "react-router-dom";
import {
  useAllPrismicDocumentsByType, 
  useSinglePrismicDocument 
} from "@prismicio/react";
import {PressQuote} from "../../components/press-quote";
import {HeadingLarge} from "../../shared";

export default function FeaturedPress() {
  const [language] = useOutletContext();
  const [homeData] = useSinglePrismicDocument('home');
  const [pressData] = useAllPrismicDocumentsByType('press');
  if(!homeData || !pressData) return;
  const isFrench = language === 'french';
  const featured = 
    pressData?.filter((item) => item.data.featured_quote) || [];
  ////Home page accepts single featured quote.////////////// 
  ////Only first returned if multiple selected.//////////////
  const featuredPressQuote = featured[0];

  const source = featuredPressQuote?.data.press_source[0].text;
  const featuredPressFrench = featuredPressQuote?.data.press_quote_french;
  const featuredPressEnglish = featuredPressQuote?.data.press_quote_english;
  const featuredPress = 
      isFrench ? featuredPressFrench : featuredPressEnglish;
  const hasFeaturedPress = Boolean(featured?.length !== 0);
      
  return(
    <>
      {!hasFeaturedPress ? 
        <HeadingLarge m={5}>Wellcome to DominiqueCarre.fr!</HeadingLarge> :
        <PressQuote quote={featuredPress[0].text} source={source} />
      }
    </>
  );
}

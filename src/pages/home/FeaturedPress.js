import {useOutletContext} from "react-router-dom";
import {
  useAllPrismicDocumentsByType, 
  useSinglePrismicDocument 
} from "@prismicio/react";
import QuotedText from "../QuotedText";
import {Box, Text, HeadingLarge} from "../../shared";
import {theme} from '../../theme';

export default function FeaturedPress() {
  const [language] = useOutletContext();
  const [homeData] = useSinglePrismicDocument('home');
  const [pressData] = useAllPrismicDocumentsByType('press');
  if(!homeData) return;
  const isFrench = language === 'french';
  const featured = 
    pressData?.filter((item) => item.data.featured_quote) || [];
  //Home page accepts single feature. 
  const featuredPress = featured[0];//Only first returned if multiple selected.

  const source = featuredPress?.data.press_source[0].text;
  const featuredPressFrench = featuredPress?.data.press_quote_french;
  const featuredPressEnglish = featuredPress?.data.press_quote_english;
  const featuredPressQuote = 
      isFrench ? featuredPressFrench : featuredPressEnglish;
  const hasFeaturedPress = Boolean(featuredPressQuote?.length !== 0);
      
  return(
    <>
      {featured.length === 0 ? 
        <HeadingLarge>Dominique Carre</HeadingLarge> :
        <Box>
          {hasFeaturedPress && (
            <Box p={['unset', theme.space[5], theme.space[6]]}>
              <QuotedText>{featuredPressQuote[0].text}</QuotedText>
              <Text 
                mr={'20px'} 
                fontStyle={'italic'} 
                fontWeight={'600'} 
                textAlign={'right'}>
                  ~ {source}
              </Text>
            </Box>
          )}
        </Box>
      }
    </>
  );
}

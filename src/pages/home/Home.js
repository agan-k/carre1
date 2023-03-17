import {useOutletContext} from "react-router-dom";
import {
  useAllPrismicDocumentsByType, 
  useSinglePrismicDocument, 
  PrismicRichText
} from "@prismicio/react";
import QuotedText from "../QuotedText";
import {Box, Text} from "../../shared";

export default function Home() {
  const [language] = useOutletContext();
  const [homeData] = useSinglePrismicDocument('home');
  const [pressData] = useAllPrismicDocumentsByType('press');
  if(!homeData) return;
  const isFrench = language === 'french';
  const newsFrench = homeData?.data.news_french;
  const newsEnglish = homeData?.data.news_english;
  const news = isFrench ? newsFrench : newsEnglish;
  const hasNews = Boolean(news?.length !== 0);
  const imageURL = homeData?.data.home_image.url;

  const featuredPress = pressData?.map((item) => {
    if (item.data.featured_quote) {
      const source = item.data.press_source[0].text;
      const featuredPressFrench = item.data.press_quote_french;
      const featuredPressEnglish = item.data.press_quote_english;
      const featuredPressQuote = 
      isFrench ? featuredPressFrench : featuredPressEnglish;
      const hasFeaturedPress = Boolean(featuredPressQuote.length !== 0);
      
      return(
        <Box key={item.id}>
          {hasFeaturedPress && (
            <Box>
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
      );
    }
  });

  return(
    <Box mt={0} px={4} pb={4}>
      <Box m={'0 auto'} width={'90%'}><img src={imageURL} width={'100%'}/></Box>
      {featuredPress}
      {hasNews ? <PrismicRichText field={news} /> : ''}
    </Box>
  );
};

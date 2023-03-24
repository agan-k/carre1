import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  PrismicRichText
} from "@prismicio/react";
import {Box} from "../../shared";
import {PageWrapper} from "../styled";
import {NewsWrapper} from "./styled";
import FeaturedPress from "./FeaturedPress";

export default function Home() {
  const [language] = useOutletContext();
  const [homeData] = useSinglePrismicDocument('home');
  if(!homeData) return;
  const isFrench = language === 'french';
  const newsFrench = homeData?.data.news_french;
  const newsEnglish = homeData?.data.news_english;
  const news = isFrench ? newsFrench : newsEnglish;
  const hasNews = Boolean(news?.length !== 0);
  const imageURL = homeData?.data.home_image.url;
  return(
    <PageWrapper display={['block', 'flex', 'flex']}>
      <Box flexGrow={'2'} width={['100%', '300px', '500px']}>
        <img src={imageURL} width={'100%'}/>
      </Box>
      <Box flexGrow={'1'} width={['100%', '300px', '500px']}>
        <FeaturedPress />
        <NewsWrapper>
          {hasNews ? <PrismicRichText field={news} /> : ''}
        </NewsWrapper>
      </Box>
    </PageWrapper>
  );
};

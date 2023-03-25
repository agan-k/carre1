import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  PrismicRichText
} from "@prismicio/react";
import {NewsWrapper} from "./styled";
import {HeadingSmall} from ".././../shared";

export default function News() {
  const [language] = useOutletContext();
  const [homeData] = useSinglePrismicDocument('home');
  if(!homeData) return;
  const isFrench = language === 'french';
  const newsFrench = homeData?.data.news_french;
  const newsEnglish = homeData?.data.news_english;
  const news = isFrench ? newsFrench : newsEnglish;
  const hasNews = Boolean(news?.length !== 0);
  return(
    <NewsWrapper>
      <HeadingSmall color={'primary'} mt={5}>News</HeadingSmall>
      {hasNews ? <PrismicRichText field={news} /> : ''}
    </NewsWrapper>
  );
}

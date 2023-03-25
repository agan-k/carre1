import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  PrismicRichText
} from "@prismicio/react";
import {NewsWrapper} from "./styled";

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
      {hasNews ? <PrismicRichText field={news} /> : ''}
    </NewsWrapper>
  );
}

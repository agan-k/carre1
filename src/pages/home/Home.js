import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";

export default function Home() {
  const [language] = useOutletContext();
  const [homeObj] = useSinglePrismicDocument('home');
  const statementEnglish = homeObj?.data.statement_english;
  const statementFrench = homeObj?.data.statement_french;
  const newsFrench = homeObj?.data.news_french;
  const newsEnglish = homeObj?.data.news_english;
  const isFrench = language === 'french';
  const statement = isFrench ? statementFrench : statementEnglish;
  const news = isFrench ? newsFrench : newsEnglish;
  const hasStatement = Boolean(statement?.length !== 0);
  const hasNews = Boolean(news?.length !== 0);

  return(
    <>
      <h1>Home</h1>
      {hasStatement ? <PrismicRichText field={statement} /> : ''}
      {hasNews ? <PrismicRichText field={news} /> : ''}
    </>
  );
};

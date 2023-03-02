import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";

export default function Home() {
  const [language] = useOutletContext();
  const [homeObj] = useSinglePrismicDocument('home');
  const statementEnglish = homeObj?.data.statement_english;
  const statementFrench = homeObj?.data.statement_french;
  const statement = language === 'french' ?
    statementFrench : statementEnglish;

  return(
    <>
      <h1>Dominique Carre Home</h1>
      {
        statement?.length !== 0 ? 
          <PrismicRichText field={statement} /> : ''
      }
    </>
  );
};

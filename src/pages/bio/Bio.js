import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";
import QuotedText from "../QuotedText";

export default function Bio() {
  const [language] = useOutletContext();
  const [bioObj] = useSinglePrismicDocument('bio');
  const bioEnglish = bioObj?.data.bio_english;
  const bioFrench = bioObj?.data.bio_french;
  const statementEnglish = bioObj?.data.statement_english || [];
  const statementFrench = bioObj?.data.statement_french || [];
  const imageURL = bioObj?.data.bio_image.url;
  const bio = language === 'french' ?
    bioFrench : bioEnglish;
  const statement = language === 'french' ?
    statementFrench : statementEnglish;
  const hasStatement = Boolean(statement?.length !== 0);
  const hasBio = Boolean(bio?.length !== 0);
  const hasImage = Boolean(imageURL !== null);

  return(
    <>
      <h1>Bio</h1>
      {hasImage ? 
        <Box m={'0 auto'} width={'70%'}>
          <img src={imageURL} width={'100%'}/>
        </Box> : ''}
      {hasStatement ? <QuotedText>{statement[0].text}</QuotedText> : ''}
      {hasBio ? <PrismicRichText field={bio} /> : ''}
    </>
  );
};

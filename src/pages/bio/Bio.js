import {useOutletContext, useLocation} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";
import QuotedText from "../QuotedText";
import {routes} from '../../router';
import {PageTitle} from "../styled";

export default function Bio() {
  const [language] = useOutletContext();
  const [bioObj] = useSinglePrismicDocument('bio');
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
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
    <Box p={4}>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      {hasImage ? 
        <Box m={'0 auto'} width={'70%'}>
          <img src={imageURL} width={'100%'}/>
        </Box> : ''}
      {hasStatement ? <QuotedText>{statement[0].text}</QuotedText> : ''}
      {hasBio ? <PrismicRichText field={bio} /> : ''}
    </Box>
  );
};

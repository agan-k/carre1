import {useOutletContext, useLocation} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";
import QuotedText from "../QuotedText";
import {routes} from '../../router';
import {PageTitle, PageWrapper} from "../styled";
import {BioImageWrapper} from './styled';
import {Box} from "../../shared";

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
    <PageWrapper>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      {hasStatement ? <QuotedText fontSize={1} color={'primaryMuted'}>
        {statement[0].text}
      </QuotedText> : ''}
      {hasImage ? 
        <BioImageWrapper width={2/5} m={4}>
          <img src={imageURL} width={'100%'} />
        </BioImageWrapper> : ''}
      <Box pt={1}>
        {hasBio ? <PrismicRichText field={bio} /> : ''}
      </Box>
    </PageWrapper>
  );
};

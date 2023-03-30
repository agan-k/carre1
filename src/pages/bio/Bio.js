import {useOutletContext, useLocation} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";
import QuotedText from "../QuotedText";
import {routes} from '../../router';
import {PageTitle, PageWrapper, Loading} from "../styled";
import {BioImageWrapper, BioWrapper} from './styled';
import {theme} from '../../theme';

export default function Bio() {
  const [language] = useOutletContext();
  const [bioObj, {state}] = useSinglePrismicDocument('bio');
  const location = useLocation();
  const loading = Boolean(state === 'idle' && 'loading');
  const error = Boolean(state === 'failed');
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
    <>
      {loading ? 
        <Loading>loading...</Loading> :
        error ? 
          <Loading>Ups, something broke! &#129300;</Loading> : 
          <PageWrapper>
            <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
            {hasStatement ? 
              <QuotedText 
                fontSize={1} 
                padding={[theme.space[4], theme.space[4], theme.space[5]]} 
                color={'primaryMuted'}>
                {statement[0].text}
              </QuotedText> : ''}
            {hasImage ? 
              <BioImageWrapper>
                <img src={imageURL} width={'100%'} />
              </BioImageWrapper> : ''}
            <BioWrapper>
              {hasBio ? <PrismicRichText field={bio} /> : ''}
            </BioWrapper>
          </PageWrapper>
      }

    </>
  );
};

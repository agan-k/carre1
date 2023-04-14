import {useOutletContext, useLocation} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Box, Text, Flex} from "../../shared";
import {routes} from '../../router';
import {PageTitle, PageWrapper, Loading} from "../styled";
import {ProjectWrapper} from "./styled";

export default function Projects() {
  const [language] = useOutletContext();
  const [projectsData, {state}] = useAllPrismicDocumentsByType('projects');
  const loading = Boolean(state === 'idle' && 'loading');
  const error = Boolean(state === 'failed');
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
  
  const projects = projectsData?.map((item) => {
    const lineup = item.data.lineup.map((item) =>
      <Flex key={item.name} flexWrap={'wrap'}>
        <Text fontWeight={'bold'}>
          {item.name}
        </Text>
        {item.instrument ?
          <Text fontStyle={'italic'}>
            &nbsp;-&nbsp;{item.instrument.toLowerCase()}
          </Text> : ''
        }
      </Flex>
    );
    const imageURL = item.data.project_image.url;
    const name = item.data.project;
    const descriptionFrench = item.data.project_description_french || [];
    const descriptionEnglish = item.data.project_description_english || [];
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;
    const hasName = Boolean(name.length !== 0);
    const hasImage = Boolean(imageURL !== null);
    const hasDescription = Boolean(description.length !== 0);

    return(
      <ProjectWrapper key={item.id}>
        <Box flex={'1 0 30%'}>
          {hasImage ? <img src={imageURL} width={'100%'}/> : ''}
        </Box>
        <Box pl={[0, 4]}>
          <PrismicRichText field={hasName ? name : ''} />
          <PrismicRichText field={hasDescription ? description : ''} />
          <Box my={5} color={'primary'}>{lineup}</Box>
          
        </Box>
      </ProjectWrapper>
    );
  });

  return (
    <>
      {loading ? 
        <Loading>loading...</Loading> :
        error ? 
          <Loading>Ups, something broke! &#129300;</Loading> : 
          <PageWrapper>
            <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
            {projects}
          </PageWrapper>
      }
    </>
  );
};

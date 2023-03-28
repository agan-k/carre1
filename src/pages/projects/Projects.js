import {useOutletContext, useLocation} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Box, Text} from "../../shared";
import {routes} from '../../router';
import {PageTitle, PageWrapper, Loading} from "../styled";
import {ProjectWrapper} from "./styled";

export default function Projects() {
  const [language] = useOutletContext();
  const [projectsData] = useAllPrismicDocumentsByType('projects');
  const hasData = Boolean(projectsData !== undefined);
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
      
  const projects = projectsData?.map((item) => {
    const imageURL = item.data.project_image.url;
    const name = item.data.project;
    const personnel = item.data.project_personnel;
    const descriptionFrench = item.data.project_description_french || [];
    const descriptionEnglish = item.data.project_description_english || [];
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;
    const hasName = Boolean(name.length !== 0);
    const hasImage = Boolean(imageURL !== null);
    const hasDescription = Boolean(description.length !== 0);
    const hasPersonnel = Boolean(personnel.length !== 0);

    return(
      <ProjectWrapper key={item.id}>
        <Box flex={'1 0 40%'}>
          {hasImage ? <img src={imageURL} width={'100%'}/> : ''}
        </Box>
        <Box pl={[0, 4]}>
          <PrismicRichText field={hasName ? name : ''} />
          <PrismicRichText field={hasDescription ? description : ''} />
          <Text color={'primary'}>
            <PrismicRichText field={hasPersonnel ? personnel : ''} />
          </Text>
        </Box>
      </ProjectWrapper>
    );
  });

  return (
    <>
      {!hasData ? 
        <Loading>loading...</Loading> :
        <PageWrapper>
          <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
          {projects}
        </PageWrapper>
      }
    </>
  );
};

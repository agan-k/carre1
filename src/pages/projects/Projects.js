import {useOutletContext, useLocation} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";
import {routes} from '../../router';
import {PageTitle} from "../styled";

export default function Projects() {
  const [language] = useOutletContext();
  const [projectsData] = useAllPrismicDocumentsByType('projects');
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
      <Box key={item.id}>
        <PrismicRichText field={hasName ? name : ''} />
        {hasImage ? 
          <Box m={'0 auto'} width={'90%'}>
            <img src={imageURL} width={'100%'}/>
          </Box> : ''}
        <PrismicRichText field={hasDescription ? description : ''} />
        <PrismicRichText field={hasPersonnel ? personnel : ''} />
      </Box>
    );
  });

  return (
    <Box p={4}>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      {projects}
    </Box>
  );
};

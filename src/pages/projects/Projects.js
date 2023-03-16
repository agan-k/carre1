import {useOutletContext} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";

export default function Projects() {
  const [language] = useOutletContext();
  const [projectsData] = useAllPrismicDocumentsByType('projects');

  const projects = projectsData?.map((item) => {
    const image = item.data.project_image.url;
    const name = item.data.project;
    const personnel = item.data.project_personnel;
    const descriptionFrench = item.data.project_description_french || [];
    const descriptionEnglish = item.data.project_description_english || [];
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;
    const hasName = Boolean(name.length !== 0);
    const hasImage = Boolean(image !== null);
    const hasDescription = Boolean(description.length !== 0);
    const hasPersonnel = Boolean(personnel.length !== 0);

    return(
      <Box key={item.id} p={4}>
        <PrismicRichText field={hasName ? name : ''} />
        {hasImage ? 
          <Box m={'0 auto'} width={'90%'}>
            <img src={image} width={'100%'}/>
          </Box> : ''}
        <PrismicRichText field={hasDescription ? description : ''} />
        <PrismicRichText field={hasPersonnel ? personnel : ''} />
      </Box>
    );
  });

  return (
    <>
      <h1>Projects</h1>
      {projects}
    </>
  );
};

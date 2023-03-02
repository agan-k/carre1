import {useOutletContext} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";

export default function Projects() {
  const [language] = useOutletContext();
  const [projects] = useAllPrismicDocumentsByType('projects');

  const project = projects?.map((item) => {
    const name = item.data.project;
    const personnel = item.data.project_personnel;
    const descriptionFrench = item.data.project_description_french;
    const descriptionEnglish = item.data.project_description_english;
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;

    return(
      <div key={item.id}>
        <PrismicRichText field={ name.length !== 0 ? name : ''} />
        <img src={item.data.project_image.url} width="200"/>
        <PrismicRichText field={description.length !== 0 ? description : ''}/>
        <PrismicRichText field={personnel.length !== 0 ? personnel : ''}/>
      </div>
    );
  });

  return project;
};

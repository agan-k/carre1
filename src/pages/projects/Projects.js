import {useOutletContext} from "react-router-dom";
import {projectsFrench, projectsEnglish} from '../../assets/content/projects';
import {MultiParagraphText} from '../../shared';

export default function Projects() {
  const [language] = useOutletContext();
  const projects = language === 'french' ?
    projectsFrench : projectsEnglish;

  return(
    <>
      {projects.map(item => 
        <div key={item.name}>
          <h2>{item.name}</h2>
          {item.img ? 
            <img src={item.img} width="200"/> : ''
          } 
          <MultiParagraphText text={item.desc} />
          <span>{item.personel}</span>
        </div>
      )}
    </>
  );
};

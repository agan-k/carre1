import {projects} from '~src/assets/content/projects';
import {MultiParagraphText} from '~src/components';
export default function Projects() {
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


import {useOutletContext} from "react-router-dom";
import {bioFrench, bioEnglish} from "~src/assets/content/bio";
import {MultiParagraphText} from "~src/shared";
import bioPic from '~src/assets/images/carre-bio.jpg';

export default function Bio() {
  const [language] = useOutletContext();
  const bio = language === 'french' ?
    bioFrench : bioEnglish;

  return(
    <>
      <h1>Bio</h1>
      <img src={bioPic} width="100" />
      <MultiParagraphText text={bio} />
    </>
  );
};

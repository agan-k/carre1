import {bioFrench} from "~src/assets/content/bio";
import {MultiParagraphText} from "~src/components/multi-paragraph-text";
import bioPic from '~src/assets/images/carre-bio.jpg';
export default function Bio() {
  return(
    <>
      <h1>Bio</h1>
      <img src={bioPic} width="100" />
      <MultiParagraphText text={bioFrench} />
    </>
  );
};

import {bioFrench} from "../assets/text/bio";
import MultiParagraphText
  from "../components/multi-paragraph-text/MultiParagraphText";

export default function Bio() {
  return(
    <>
      <h1>Bio</h1>
      <MultiParagraphText text={bioFrench} />
    </>
  );
};

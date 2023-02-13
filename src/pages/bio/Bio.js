import {bioFrench} from "~src/assets/content/bio";
import {MultiParagraphText} from "~src/components/multi-paragraph-text";

export default function Bio() {
  return(
    <>
      <h1>Bio</h1>
      <MultiParagraphText text={bioFrench} />
    </>
  );
};

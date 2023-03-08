import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";

export default function Bio() {
  const [language] = useOutletContext();
  const [bioObj] = useSinglePrismicDocument('bio');
  const bioEnglish = bioObj?.data.bio_english;
  const bioFrench = bioObj?.data.bio_french;
  const bioImage = bioObj?.data.bio_image.url;
  const bio = language === 'french' ?
    bioFrench : bioEnglish;

  return(
    <>
      <h1>Bio</h1>
      <img src={bioImage} width="100" />
      {
        bio?.length !== 0 ? 
          <PrismicRichText field={bio} /> : ''
      }
    </>
  );
};

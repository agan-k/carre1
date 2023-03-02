import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument, PrismicRichText} from "@prismicio/react";
import bioPic from '../../assets/images/carre-bio.jpg';

export default function Bio() {
  const [language] = useOutletContext();
  const [bioObj] = useSinglePrismicDocument('bio');
  const bioEnglish = bioObj?.data.bio_english;
  const bioFrench = bioObj?.data.bio_french;
  const bio = language === 'french' ?
    bioFrench : bioEnglish;

  return(
    <>
      <h1>Bio</h1>
      <img src={bioPic} width="100" />
      {
        bio?.length !== 0 ? 
          <PrismicRichText field={bio} /> : ''
      }
    </>
  );
};

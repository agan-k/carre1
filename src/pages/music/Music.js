import {useOutletContext} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";

export default function Music() {
  const [language] = useOutletContext();
  const [albumsData] = useAllPrismicDocumentsByType('albums');

  const albums = albumsData?.map((item) => {
    const title = item.data.album_title;
    const personnel = item.data.album_personnel;
    const descriptionFrench = 
      item.data.french_album_description_french || [];
    const descriptionEnglish = 
      item.data.english_album_description_english || [];
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;

    return(
      <div key={item.id}>
        <img src={item.data.album_image.url} width="200" />
        <PrismicRichText field={title.length !== 0 ? title : ''} />
        <PrismicRichText field={description.length !== 0 ? description : ''} />
        <PrismicRichText field={personnel.length !== 0 ? personnel : ''} />
        {item.data.video.url !== null ? 
          <iframe 
            width="300" 
            height="200" 
            src={item.data.video.url} 
            title="YouTube video player"
          /> : ''
        }
        <hr></hr>
      </div>
    );
  });
  return albums;
};

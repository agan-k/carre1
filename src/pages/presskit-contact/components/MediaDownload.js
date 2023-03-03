import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument} from "@prismicio/react";

export const MediaDownload = () => {
  const [language] = useOutletContext();
  const [mediaData] = useSinglePrismicDocument('media');
  const photoDownloadUrl = mediaData?.data.photo_download.url;

  return(
    <>
      <a href={photoDownloadUrl}>Download Photos ZIP</a><br/>
      {language === 'french' ? 
        <a href={photoDownloadUrl}>Fiche Technique</a> : 
        <a href={photoDownloadUrl}>Rider</a>
      }
    </>
  );
};

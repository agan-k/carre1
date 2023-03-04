import {useOutletContext} from "react-router-dom";
import {useSinglePrismicDocument} from "@prismicio/react";

export const MediaDownload = () => {
  const [language] = useOutletContext();
  const [mediaData] = useSinglePrismicDocument('media');
  const isFrench = language === 'french';

  const photoDownload = mediaData?.data.photo_download.url;
  const riderFrench = mediaData?.data.rider_french.url;
  const riderEnglish = mediaData?.data.rider_english.url;

  const rider = isFrench ? riderFrench : riderEnglish;
  const riderName = isFrench ? 'Fiche Technique' : 'Rider';

  const photoDownloadLink = <a href={photoDownload}>Download Photos ZIP</a>;
  const riderDownloadLink = <a href={rider}>{riderName}</a>;

  const hasRider = Boolean(rider !== undefined);
  const hasPhotoDownload = Boolean(photoDownload !== undefined);

  return(
    <>
      {hasPhotoDownload ? photoDownloadLink : ''}
      <br/>
      {hasRider ? riderDownloadLink : ''}
    </>
  );
};

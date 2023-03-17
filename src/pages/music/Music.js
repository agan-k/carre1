import {useOutletContext} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";

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
    const imageURL = item.data.album_image.url;
    const hasImage = Boolean(imageURL !== null);

    return(
      <Box key={item.id} mb={6} pb={6} borderTop={'1px solid gray'}>
        <PrismicRichText field={title.length !== 0 ? title : ''} /> 
        {hasImage ? 
          <Box m={'0 auto'} width={'70%'} border={'1px solid gray'}>
            <img src={imageURL} width={'100%'}/>
          </Box> : ''}
        <PrismicRichText field={description.length !== 0 ? description : ''} />
        <PrismicRichText field={personnel.length !== 0 ? personnel : ''} />
        {item.data.video.url !== null ? 
          <Box m={'0 auto'} mt={7} width={'90%'} border={'1px solid gray'}>
            <iframe 
              width="90%" 
              height="200" 
              src={item.data.video.url} 
              title="YouTube video player"
            />

          </Box> : ''
        }
      </Box>
    );
  });
  return (
    <Box p={4}>
      <h1>Music</h1>
      {albums}
    </Box>
  );
};

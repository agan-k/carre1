import PropTypes from 'prop-types';
import {PrismicRichText} from "@prismicio/react";
import {Box} from "../../shared";
import {AlbumsWrapper} from "./styled";

export default function Albums({albumsData, language}) {
  const albums = albumsData?.map((item) => {
    const title = item.data.album_title;
    const personnel = item.data.album_personnel;
    const descriptionFrench = 
      item.data.french_album_description || [];
    const descriptionEnglish = 
      item.data.english_album_description_ || [];
    const description = language === 'french' ?
      descriptionFrench : descriptionEnglish;
    const imageURL = item.data.album_image.url;
    const hasImage = Boolean(imageURL !== null);
    const hasDescription = Boolean(description.length !== 0);
    return(
      <AlbumsWrapper key={item.id}>
        <PrismicRichText field={title.length !== 0 ? title : ''} /> 
        <Box display={['block', 'block', 'flex']}>
          <Box flex={'1 0 40%'} p={['unset', 'unset', 4]}>
            {hasImage ? <img src={imageURL}/> : ''}
            <PrismicRichText field={hasDescription ? description : ''} />
            <PrismicRichText field={personnel.length !== 0 ? personnel : ''} />
          </Box>
          <Box 
            flex={'1 0 60%'}
          >
            {item.data.video.url !== null ? 
              <iframe 
                width="100%" 
                height="100%" 
                src={item.data.video.url} 
                title="YouTube video player"
                border='none'
              /> : ''
            }
          </Box>
        </Box>
      </AlbumsWrapper>
    );
  });

  return albums;
}

Albums.propTypes = {
  albumData: PropTypes.arrayOf(Object),
  language: PropTypes.string,
};

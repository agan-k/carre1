import PropTypes from 'prop-types';
import {Box, Text, Flex} from "../../shared";
import {AlbumsWrapper, LineupWrapper} from "./styled";

export default function Albums({albumsData}) {
  const albums = albumsData?.map((item) => {
    const title = item.data.title;
    const lineup = item.data.lineup.map((i, index) =>
      <li key={i.name + index}>
        <Flex flexWrap={'wrap'}>
          <Text fontWeight={'bold'}>{i.name}&nbsp;</Text>
          <Text fontStyle={'italic'}>
              -&nbsp;{i.instrument.toLowerCase()}
          </Text>
        </Flex>
      </li>
    );
    const imageURL = item.data.album_image.url;
    const hasImage = Boolean(imageURL !== null);
    const hasLineup = Boolean(item.data.lineup.length !== 0);
    const hasTitle = Boolean(item.data.title !== null);

    return(
      <AlbumsWrapper key={item.id}>
        {/* <PrismicRichText field={title !== null ? title : ''} />  */}
        {hasTitle ? <h2>{title}</h2> : ''}
        <Box display={['block', 'block', 'flex']}>
          <Box flex={'1 0 40%'} p={['unset', 'unset', 4]}>
            {hasImage ? <img src={imageURL}/> : ''}
          </Box>
          {hasLineup ? <LineupWrapper>{lineup}</LineupWrapper> : ''}
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

import PropTypes from 'prop-types';
import {Box, Text, Flex} from "../../shared";
import {AlbumsWrapper, LineupWrapper} from "./styled";

export default function Albums({albumsData}) {
  const albums = albumsData?.map((item) => {
    const title = item.data.title;
    const lineup = item.data.lineup.map((lineupItem, index) => {
      const name = lineupItem.name || null;
      const instrument = lineupItem.instrument || null;
      const hasName = Boolean(name !== null);
      const hasInstrument = Boolean(instrument !== null);
      const instrumentsArr = 
      hasInstrument ? instrument.split(' ') : null;
      return (
        <Flex key={lineupItem.name + index} flexWrap={'wrap'}>
          {hasName ? <Text fontWeight={'bold'}>{name}&nbsp;-&nbsp;</Text> : ''}
          {hasInstrument ? 
            instrumentsArr.map((instrument, index) => 
              <Text key={instrument + index} fontStyle={'italic'}>
                &nbsp;{instrument.toLowerCase()}
              </Text>
            )
            : ''
          }
        </Flex>
      );
    }
    );
    const imageURL = item.data.album_image.url;
    const hasImage = Boolean(imageURL !== null);
    const hasLineup = Boolean(item.data.lineup.length !== 0);
    const hasTitle = Boolean(item.data.title !== null);

    return(
      <AlbumsWrapper key={item.id}>
        {hasTitle ? <h2>{title}</h2> : ''}
        <Box display={['block', 'block', 'flex']}>
          <Box flex={'1 0 40%'} p={['unset', 'unset', 4]}>
            {hasImage ? <img src={imageURL}/> : ''}
            {hasLineup ? <LineupWrapper>{lineup}</LineupWrapper> : ''}
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

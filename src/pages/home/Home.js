import {useSinglePrismicDocument} from "@prismicio/react";
import {Box} from "../../shared";
import {PageWrapper, Loading} from "../styled";
import FeaturedPress from "./FeaturedPress";
import News from "./News";
import {theme} from '../../theme';

export default function Home() {
  const [homeData, {state}] = useSinglePrismicDocument('home');
  const imageURL = homeData?.data.home_image.url;
  const loading = Boolean(state === 'idle' && 'loading');
  const error = Boolean(state === 'failed');
  return(
    <>
      {loading ? 
        <Loading>loading...</Loading> : 
        error ? 
          <Loading>Ups, something broke! &#129300;</Loading> : 
          <PageWrapper display={['block', 'block', 'flex', 'flex']}>
            <Box
              flex={['unset', '1 1 20%', '1 1 30%', 'unset']}>
              <img src={imageURL} width={'100%'}/>
            </Box>
            <Box 
              flex={'1 1 50%'}
              p={[
                theme.space[1], 
                theme.space[6], 
                theme.space[4], 
                theme.space[6]]}>
              <FeaturedPress />
              <News />
            </Box>
          </PageWrapper>
      }
    </>
  );
};

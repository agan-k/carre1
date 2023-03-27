import {useSinglePrismicDocument} from "@prismicio/react";
import {Box} from "../../shared";
import {PageWrapper} from "../styled";
import FeaturedPress from "./FeaturedPress";
import News from "./News";
import {theme} from '../../theme';

export default function Home() {
  const [homeData] = useSinglePrismicDocument('home');
  if(!homeData) return;
  const imageURL = homeData?.data.home_image.url;
  return(
    <PageWrapper display={['block', 'flex', 'flex', 'flex']}>
      <Box
        flex={['unset', '1 1 20%', '1 1 30%', 'unset']}>
        <img src={imageURL} width={'100%'}/>
      </Box>
      <Box 
        flex={'1 1 50%'}
        p={[
          theme.space[1], 
          theme.space[4], 
          theme.space[4], 
          theme.space[6]]}>
        <FeaturedPress />
        <News />
      </Box>
    </PageWrapper>
  );
};

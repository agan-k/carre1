import {useOutletContext, useLocation} from "react-router-dom";
import {PressQuotes, Contact, MediaDownload} from "./components";
import {Box, HeadingSmall} from "../../shared";
import {routes} from '../../router';
import {PageTitle, PageWrapper} from "../styled";
 
export default function PresskitContact() {
  const [language] = useOutletContext();
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
  return (
    <PageWrapper minHeight={'800px'}>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      <Box display={['block', 'block', 'flex']}>
        <Box flex={'1 0 30%'} p={['unset', 'unset', 6]}>
          <HeadingSmall mb={2} color={'primary'}>Press</HeadingSmall>
          <PressQuotes />
        </Box>
        <Box 
          display={'flex'} 
          flexDirection={'column'}
          justifyContent={'space-around'}
          flex={'1 0 30%'}>
          <Box>
            <HeadingSmall mb={2} color={'primary'}>Booking</HeadingSmall>
            <Contact />
          </Box>
          <Box>
            <HeadingSmall mb={2} color={'primary'}>Downloads</HeadingSmall>
            <MediaDownload />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

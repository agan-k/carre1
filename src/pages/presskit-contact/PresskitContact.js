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
      <Box display={['block', 'block', 'flex']} mt={6}>
        <Box 
          display={'flex'} 
          flexDirection={'column'}
          justifyContent={'space-between'}
          flex={'1 0 30%'}
          ml={['unset', 'unset', 3]}>
          <Box mb={[5, 5, 'unset']} >
            <HeadingSmall mb={2} color={'primary'}>Booking</HeadingSmall>
            <Contact />
          </Box>
          <Box mb={[5, 5, 'unset']} >
            <HeadingSmall mb={2} color={'primary'}>Downloads</HeadingSmall>
            <MediaDownload />
          </Box>
        </Box>
        <Box flex={'1 0 30%'} mb={[5, 5, 'unset']} pr={['unset', 'unset', 7]}>
          <HeadingSmall mb={['unset', 'unset', 2]} color={'primary'}>
            Press
          </HeadingSmall>
          <PressQuotes />
        </Box>
      </Box>
    </PageWrapper>
  );
}

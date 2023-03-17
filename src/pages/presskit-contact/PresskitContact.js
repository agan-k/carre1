import {useOutletContext, useLocation} from "react-router-dom";
import {PressQuotes, Contact, MediaDownload} from "./components";
import {Box} from "../../shared";
import {routes} from '../../router';
import {PageTitle} from "../styled";
 
export default function PresskitContact() {
  const [language] = useOutletContext();
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
  return (
    <Box p={4}>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      <Box>
        <h3>Press</h3>
        <PressQuotes />
      </Box>
      <Box>
        <h3>Booking</h3>
        <Contact />
      </Box>
      <Box>
        <h3>Downloads</h3>
        <MediaDownload />
      </Box>
    </Box>
  );
}

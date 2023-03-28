import {useOutletContext, useLocation} from "react-router-dom";
import {routes} from '../../router';
import {PageTitle} from "../styled";
import Albums from "./Albums";
import {PageWrapper} from "../styled";

export default function Music() {
  const [language] = useOutletContext();
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];

  return (
    <PageWrapper>
      <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
      <Albums />
    </PageWrapper>
  );
};

import {useOutletContext, useLocation} from "react-router-dom";
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {routes} from '../../router';
import {PageTitle, Loading} from "../styled";
import Albums from "./Albums";
import {PageWrapper} from "../styled";

export default function Music() {
  const [language] = useOutletContext();
  const [albumsData] = useAllPrismicDocumentsByType('albums');
  const hasData = Boolean(albumsData !== undefined);
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];

  return (
    <>
      {!hasData ? 
        <Loading>loading...</Loading> : 
        <PageWrapper>
          <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
          <Albums albumsData={albumsData} language={language}/>
        </PageWrapper>
      }
    </>
  );
};

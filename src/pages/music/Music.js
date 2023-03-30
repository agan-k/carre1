import {useOutletContext, useLocation} from "react-router-dom";
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {routes} from '../../router';
import {PageTitle, Loading} from "../styled";
import Albums from "./Albums";
import {PageWrapper} from "../styled";

export default function Music() {
  const [language] = useOutletContext();
  const [albumsData, {state}] = useAllPrismicDocumentsByType('albums');
  const loading = Boolean(state === 'idle' && 'loading');
  const error = Boolean(state === 'failed');
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];

  return (
    <>
      {loading ? 
        <Loading>loading...</Loading> : 
        error ? 
          <Loading>Ups, something broke! &#129300;</Loading> : 
          <PageWrapper>
            <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
            <Albums albumsData={albumsData} language={language}/>
          </PageWrapper>
      }
    </>
  );
};

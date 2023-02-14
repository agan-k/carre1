import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {contentFrench, contentEnglish} from "~src/assets/content/content";

import {Nav, LanguageSelector} from "./components";
import Header from "./layout/Header";

export default function app() {
  const [language, setLanguage] = useState('french');
  const [content, setContent] = useState();

  const onChange = ({language}) => {
    setLanguage(language);
  };

  useEffect(() => {
    if(language === 'french') setContent(contentFrench);
    if(language === 'english') setContent(contentEnglish);
  }, [language]);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav />
        <LanguageSelector />
      </Header>
      <Outlet context={[language, content, onChange]}/>
    </ThemeProvider>
  );
}

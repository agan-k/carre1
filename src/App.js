import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {contentFrench, contentEnglish} from "~src/assets/content/content";

import {Nav, LanguageSelector} from "./components";
import Header from "./layout/Header";

export default function App() {
  const [language, setLanguage] = useState('french');
  const [data, setData] = useState();

  const onChange = (language) => {
    setLanguage(language);
  };

  useEffect(() => {
    if(language === 'french') setData(contentFrench);
    if(language === 'english') setData(contentEnglish);
  }, [language]);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav language={language} />
        <LanguageSelector language={language} onChange={onChange} />
      </Header>
      <Outlet context={[language, data, onChange]}/>
    </ThemeProvider>
  );
}

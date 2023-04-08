import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from './theme';
import {DEFAULT_LANGUAGE, MISSING_TRACK_TITLE} from './pages/constants';
import {usePrismicDocumentsByType} from "@prismicio/react";
import {handleMissingAudioData} from "./utils";
import {Header, Footer} from "./layout";

export default function App() {
  const [data] = usePrismicDocumentsByType('audio_player');
  const audioData = data?.results[0].data.tracks;
  const [tracksData, setTracksData] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [isOpenNav, setIsNavOpen] = useState(false);
  const [isOpenTrackList, setIsOpenTrackList] = useState(false);

  const audioPlayerData = 
    handleMissingAudioData({audioData, missingTrackTitle: MISSING_TRACK_TITLE});

  const onChange = (language) => {
    setLanguage(language);
  };

  const toggleNavView = () => {
    setIsNavOpen(!isOpenNav);
  };

  const toggleTrackListView = () => {
    setIsOpenTrackList(!isOpenTrackList);
  };

  useEffect(() => {
    setTracksData(audioPlayerData);
  }, [language, audioData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        onChange={onChange}
        language={language}
        tracksData={tracksData}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
        toggleTrackListView={toggleTrackListView}
        isOpenTrackList={isOpenTrackList}
      />
      <Outlet context={[language, onChange]}/>
      <Footer />
    </ThemeProvider>
  );
}

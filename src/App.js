import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from './theme';
import {DEFAULT_LANGUAGE, MISSING_TRACK_TITLE} from './pages/constants';
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {handleAudioPlayerData, isDefault} from "./utils";
import {Header, Footer} from "./layout";

export default function App() {
  const [audioData] = useAllPrismicDocumentsByType('audio_player_track');
  const [tracksData, setTracksData] = useState();
  const [defaultTrack, setDefaultTrack] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [isOpenNav, setIsNavOpen] = useState(false);
  const [isOpenTrackList, setIsOpenTrackList] = useState(false);
  const isFrench = Boolean(language === 'french');
  const siteDomain = isFrench ? 'DominiqueCarré.fr' : 'DominiqueCarre.com';

  const audioPlayerData = 
    handleAudioPlayerData({audioData, missingTrackTitle: MISSING_TRACK_TITLE});

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
    setDefaultTrack(audioPlayerData?.find(isDefault));
  }, [language, audioData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        onChange={onChange}
        language={language}
        tracksData={tracksData}
        defaultTrack={defaultTrack}
        siteDomain={siteDomain}
        toggleNavView={toggleNavView}
        toggleTrackListView={toggleTrackListView}
        isOpenTrackList={isOpenTrackList}
      />
      <Outlet context={[language, onChange]}/>
      <Footer />
    </ThemeProvider>
  );
}

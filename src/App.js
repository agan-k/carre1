import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from './theme';
import {DEFAULT_LANGUAGE, MISSING_TRACK_TITLE} from './pages/constants';
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {handleAudioPlayerData, isDefault} from "./utils";
import {Nav, LanguageSelector} from "./components";
import Header from "./layout/Header";
import {AudioPlayer} from "./components/audio-player";
import {Box, HeadingLarge} from "./shared";

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
      <Header>
        <Box 
          pl={2}
          color={'black'}
          backgroundColor={'#EFEFEF'} 
          display={'flex'} 
          justifyContent={'space-between'}
        >
          <HeadingLarge 
            fontSize={2} 
            lineHeight={3}
            pl={2}
          >
            {siteDomain}
          </HeadingLarge>
          <LanguageSelector language={language} onChange={onChange} />
        </Box>
        {defaultTrack && tracksData && (
          <AudioPlayer 
            tracksData={tracksData} 
            defaultTrack={defaultTrack}
            isOpenNav={isOpenNav}
            toggleNavView={toggleNavView}
            isOpenTrackList={isOpenTrackList}
            toggleTrackListView={toggleTrackListView}
          />
        )}
        <Nav 
          language={language} 
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
        />
      </Header>
      <Outlet context={[language, onChange]}/>
    </ThemeProvider>
  );
}

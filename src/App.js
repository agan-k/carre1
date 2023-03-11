import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from './theme';
import {DEFAULT_LANGUAGE, MISSING_TRACK_TITLE} from './pages/constants';
import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {handleAudioPlayerData, isDefault} from "./utils";
import {Nav} from "./components";
import Header from "./layout/Header";
import {AudioPlayer} from "./components/audio-player";

export default function App() {
  const [audioData] = useAllPrismicDocumentsByType('audio_player_track');
  const [tracksData, setTracksData] = useState();
  const [defaultTrack, setDefaultTrack] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const audioPlayerData = 
    handleAudioPlayerData({audioData, missingTrackTitle: MISSING_TRACK_TITLE});

  const onChange = (language) => {
    setLanguage(language);
  };

  useEffect(() => {
    setTracksData(audioPlayerData);
    setDefaultTrack(audioPlayerData?.find(isDefault));
  }, [language, audioData]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        {defaultTrack && tracksData && (
          <AudioPlayer 
            tracksData={tracksData} 
            defaultTrack={defaultTrack}/>
        )}
        <Nav language={language} onChange={onChange} />
      </Header>
      <Outlet context={[language, onChange]}/>
    </ThemeProvider>
  );
}

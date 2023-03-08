import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {DEFAULT_LANGUAGE} from './pages/constants';
import {useAllPrismicDocumentsByType} from "@prismicio/react";

import {Nav, LanguageSelector} from "./components";
import Header from "./layout/Header";
import {AudioPlayer} from "./components/audio-player";

export default function App() {
  const [audioData] = useAllPrismicDocumentsByType('audio_player_track');
  const [tracksData, setTracksData] = useState();
  const [defaultTrack, setDefaultTrack] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const audioPlayerData = audioData?.map((item, index) => {
    return {
      trackNumber: index + 1,
      title: item.data.track_title,
      id: item.id,
      audio: new Audio(item.data.track_link.url),
      default: item.data.default_track,
    };
  });
  function isDefault(track) {
    return track.default === true;
  }

  const onChange = (language) => {
    setLanguage(language);
  };

  useEffect(() => {
    setTracksData(audioPlayerData);
    setDefaultTrack(audioPlayerData?.find(isDefault));
  }, [language, audioData]);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        {defaultTrack && tracksData && (
          <AudioPlayer 
            tracksData={tracksData} 
            defaultTrack={defaultTrack}/>
        )}
        <Nav language={language} />
        <LanguageSelector language={language} onChange={onChange} />
      </Header>
      <Outlet context={[language, onChange]}/>
    </ThemeProvider>
  );
}

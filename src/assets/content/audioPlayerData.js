import track1 from 'url:../audio/new-wind.mp3';
import track2 from 'url:../audio/lawns.mp3';
import track3 from 'url:../audio/my-blue-heaven.mp3';
import track4 from 'url:../audio/nuages.mp3';
import track5 from 'url:../audio/flechedor.mp3';
import track6 from 'url:../audio/russian-lullaby.mp3';
export default [
  {
    trackNumber: 1,
    title: 'New wind',
    id: 1,
    audio: new Audio(track1),
  },
  {
    trackNumber: 2,
    title: 'Lawns',
    id: 2,
    audio: new Audio(track2),
  },
  {
    trackNumber: 3,
    title: 'My blue heaven',
    id: 3,
    audio: new Audio(track3),
  },
  {
    trackNumber: 4,
    title: 'Nuages',
    id: 5,
    audio: new Audio(track4),
  },
  {
    trackNumber: 5,
    title: `Fleche d'or`,
    id: 4,
    audio: new Audio(track5),
  },
  {
    trackNumber: 6,
    title: 'Russian lullaby',
    id: 6,
    audio: new Audio(track6),
  },
];

const track1 =
  require(
    'url:~src/assets/audio/new-wind.mp3');
const track2 =
  require(
    'url:~src/assets/audio/lawns.mp3');
const track3 =
  require(
    'url:~src/assets/audio/my-blue-heaven.mp3');
const track4 =
  require(
    'url:~src/assets/nuages.mp3');
const track5 =
  require(
    'url:~src/assets/audio/flechedor.mp3');
const track6 =
  require(
    'url:~src/assets/audio/ruissian-lullaby.mp3');
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
    id: 4,
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
    id: 4,
    audio: new Audio(track6),
  },
];

import {render, screen} from '@testing-library/react';
import TrackList from './TrackList';

const TRACKS = [
  {
    title: 'Track One',
    id: 1,
  },
  {
    title: 'Track Two',
    id: 2,
  },
  {
    title: 'Track Three',
    id: 3,
  },
];

it('renders component', () => {
  render(<TrackList tracks={TRACKS} />);
  const boxElement = screen.getByText(/Track One/i);
  expect(boxElement).toBeInTheDocument();
});

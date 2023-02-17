import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {content} from './assets/content/content';

it('renders conponent and navigates', async () => {
  render(<App />, {wrapper: BrowserRouter});
  const user = userEvent.setup();

  expect(screen.getByText(/Dominique/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Musique/i)).toBeInTheDocument();
});

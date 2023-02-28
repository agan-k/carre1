import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

it('renders conponent in french and changes to english on click', async () => {
  render(<App />, {wrapper: BrowserRouter});  
  const languageButtonEnglish = screen.getByRole('button', {name: 'English'});

  expect(languageButtonEnglish).toBeInTheDocument();
  expect(screen.getByRole('link', {name: 'Musique'})).toBeInTheDocument();
  expect(screen.queryByRole('link', {name: 'Music'})).not.toBeInTheDocument();
  
  fireEvent.click(languageButtonEnglish);
  const languageButtonFrench = screen.getByRole('button', {name: 'Française'});
  
  expect(languageButtonFrench).toBeInTheDocument();
  expect(screen.getByRole('link', {name: 'Music'})).toBeInTheDocument();
  expect(screen.queryByRole('link', {name: 'Musique'})).not.toBeInTheDocument();
});

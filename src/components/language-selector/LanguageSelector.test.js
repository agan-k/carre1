import {screen, render} from '@testing-library/react';
import LanguageSelector from './LanguageSelector';
import {DEFAULT_LANGUAGE} from '../../pages/constants';

const languageToggleName =
  DEFAULT_LANGUAGE === 'french' ? 'English' : 'Française';

it('renders language selector button based on language prop', () => {
  render(<LanguageSelector language={DEFAULT_LANGUAGE} />);
  const languageToggle = 
    screen.getByRole('button', {name: languageToggleName});

  expect(languageToggle).toBeInTheDocument();
});

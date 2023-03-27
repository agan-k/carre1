import {useSinglePrismicDocument} from '@prismicio/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavWrapper, NavItem, LanguageSelectorWrapper} from './styled';
import NavViewToggle from './NavViewToggle';
import {LanguageSelector} from '../../components';
import {BlackBorder} from '../../shared';

export default function Nav(
  {
    language, 
    onChange,
    toggleNavView, 
    isOpenNav, 
    isOpenTrackList, 
    toggleTrackListView,
  }) {
  const [socialLinksData] = useSinglePrismicDocument('social_links');
  const {data} = socialLinksData || {};
  const navLinks = routes.map((item) => 
    <NavItem key={item.id}>
      <Link to={item.path} onClick={() => toggleNavView()}>
        {item.element.props.name[`${language}`]}
      </Link>
    </NavItem>
  );

  const socialLinks = data?.social_links.map((item) => {
    return(
      item.spans.length !== 0 ?
        <NavItem key={item.text}>
          <Link to={item.spans[0].data.url} onClick={() => toggleNavView()} >
            {item.text}
          </Link>
        </NavItem> : ''
    );
  });
  return (
    <>
      <BlackBorder p={2}>
        <NavViewToggle
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
        />
      </BlackBorder>
      <NavWrapper isOpenNav={isOpenNav} role='navigation'>
        <LanguageSelectorWrapper>
          <LanguageSelector language={language} onChange={onChange} />
        </LanguageSelectorWrapper>
        {navLinks}
        {socialLinks}
      </NavWrapper>
    </>
  );
}

Nav.propTypes = {
  language: PropTypes.string,
  onChange: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};

import {useSinglePrismicDocument} from '@prismicio/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavWrapper, NavGroup, NavItem} from './styled';
import NavViewToggle from './NavViewToggle';
import {LanguageSelector} from '../../components';

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
      <NavViewToggle
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
      />
      <NavWrapper
        isOpenNav={isOpenNav}
      >
        <NavGroup>
          {navLinks}
        </NavGroup>
        <NavGroup>
          {socialLinks}
        </NavGroup>
        <NavGroup>
          <NavItem>
            <LanguageSelector language={language} onChange={onChange} />
          </NavItem>
        </NavGroup>
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

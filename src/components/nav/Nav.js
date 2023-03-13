import {useSinglePrismicDocument} from '@prismicio/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavWrapper, NavList, NavListItem} from './styled';
import NavViewToggle from './NavViewToggle';

export default function Nav({language, toggleNavView, isNavOpen}) {
  const [socialLinksData] = useSinglePrismicDocument('social_links');
  const {data} = socialLinksData || {};
  const navLinks = routes.map((item) => 
    <NavListItem key={item.id}>
      <Link to={item.path}>
        {item.element.props.name[`${language}`]}
      </Link>
    </NavListItem>
  );

  const socialLinks = data?.social_links.map((item) => {
    return(
      item.spans.length !== 0 ?
        <NavListItem key={item.text}>
          <Link to={item.spans[0].data.url}>{item.text}</Link>
        </NavListItem> : ''
    );
  });
  
  return (
    <>
      <NavViewToggle toggle={toggleNavView} isNavOpen={isNavOpen} />
      <NavWrapper w={1/2} isNavOpen={isNavOpen}>
        <nav>
          <NavList>
            {navLinks}
          </NavList>
          <NavList>
            {socialLinks}
          </NavList>
        </nav>
      </NavWrapper>
    </>
  );
}

Nav.propTypes = {
  language: PropTypes.string,
  toggleNavView: PropTypes.func,
  isNavOpen: PropTypes.bool,
};

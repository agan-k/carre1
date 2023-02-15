import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';
import social from './social';

export default function Nav({language}) {
  const navLinks = routes.map((item) => 
    <li key={item.id}>
      <Link to={item.path}>
        {item.element.props.name[`${language}`]}
      </Link>
    </li>
  );

  const socialLinks = social.map((item) => 
    <li key={item.media}>
      <a href={item.url}>{item.media}</a>
    </li>
  );
  
  return (
    <nav>
      <ul>
        {navLinks}
        {socialLinks}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  language: PropTypes.string.isRequired,
};

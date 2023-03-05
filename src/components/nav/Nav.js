import {useSinglePrismicDocument} from '@prismicio/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';

export default function Nav({language}) {
  const [socialLinksData] = useSinglePrismicDocument('social_links');
  const {data} = socialLinksData || {};
  const navLinks = routes.map((item) => 
    <li key={item.id}>
      <Link to={item.path}>
        {item.element.props.name[`${language}`]}
      </Link>
    </li>
  );

  const socialLinks = data?.social_links.map((item) => 
    <li key={item.text}>
      <Link to={item.spans[0].data.url}>
        {item.text}
      </Link>
    </li>
  );
  
  return (
    <nav>
      <ul>
        {navLinks}
      </ul>
      <ul>
        {socialLinks}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  language: PropTypes.string.isRequired,
};

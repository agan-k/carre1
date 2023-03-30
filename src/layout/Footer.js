import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FooterWrapper} from './styled';
import {Text, Box} from '../shared';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return(
    <FooterWrapper>
      ©<span>{currentYear}</span> Dominique Carre
      <Box display={'flex'} justifyContent={'center'}>
        <Text color={'lightGray'}>site by &nbsp;</Text>
        <Link to={'https://formversuscontent.com'}>
          <Text color={'primary'}>FormVsContent</Text>
        </Link>
      </Box>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

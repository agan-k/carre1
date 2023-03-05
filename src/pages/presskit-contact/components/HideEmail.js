import PropTypes from 'prop-types';

export const HideEmail = ({email}) => {
  if(!email) return;
  const username = email.split('@')[0];
  const domainAndExtension = email.split('@')[1];
  const domain = domainAndExtension.split('.')[0];
  const extension = domainAndExtension.split('.')[1];
  return(
    <span>
      {username}@{domain}
      <b style={{display: 'none'}}>.io</b>
      .{extension}
    </span>
  );
};

HideEmail.propTypes = {
  email: PropTypes.string,
};

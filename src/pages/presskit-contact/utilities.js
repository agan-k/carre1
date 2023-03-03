export const hideEmail = (email) => {
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
export const validateEmail = async (email) => {
  if(!email) return;
  const acceptedEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isValid = acceptedEmail.test(email);
  // eslint-disable-next-line no-console
  if(!isValid) console.log('ERROR email NOT valid: ', email);
  return isValid;
};

export const validateEmail = async (email) => {
  if(!email) return;
  const acceptedEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isValid = acceptedEmail.test(email);
  // eslint-disable-next-line no-console
  if(!isValid) console.log('ERROR email NOT valid: ', email);
  return isValid;
};

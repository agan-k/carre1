export const hideEmail = (email) => {
  const username = email.split('@')[0];
  const pt2 = email.split('@')[1];
  const domain = pt2.split('.')[0];
  const extension = pt2.split('.')[1];
  return(
    <span>
      {username}@{domain}
      <b style={{display: 'none'}}>.io</b>
      .{extension}
    </span>
  );
};

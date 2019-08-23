export default (req, res) => {
  const response_type = 'code';
  const client_id = '86bjx83kyeebvw';
  const redirect_url = 'http://127.0.0.1:3000/linkedin-callback';
  const state = 'aRandomString';
  const scope = 'r_liteprofile%20r_emailaddress';

  const redirectUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_url}&state=${state}&scope=${scope}`;
  res.writeHead(301, {
    location: redirectUrl
  });
  res.end();
};

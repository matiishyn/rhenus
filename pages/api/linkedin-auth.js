export default (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain',
  //   'Trailer': 'Content-MD5' });
  // res.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
  // res.end();
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

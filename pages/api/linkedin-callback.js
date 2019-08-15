const request = require('request');

export default (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    qs: {
      client_id: '86bjx83kyeebvw',
      client_secret: '2BM6DCRkJFcjWywc',
      grant_type: 'authorization_code',
      redirect_uri: 'http://127.0.0.1:3000/linkedin-callback',
      code: req.query.code
    }
  };

  return request(options, function(error, response, body) {
    if (error) throw new Error(error);
    const object = JSON.parse(body);
    const value = object['access_token'];
    const tokenBearer = 'Bearer ' + value;

    const opt = {
      method: 'GET',
      url: 'https://api.linkedin.com/v2/me',
      headers: {
        Authorization: tokenBearer
      }
    };

    return request(opt, function(error, response, body) {
      if (error) throw new Error(error);
      const data = JSON.parse(body);

      return res.json(data);
    });
  });
};

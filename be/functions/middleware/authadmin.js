const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const accessToken = req.headers['x-access-token'];
  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, 'SECRET_KEY_ADMIN');
      // console.log(decoded);
      req.accessTokenPayload = decoded;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        message: 'Invalid access token.'
      });
    }
  } else {
    return res.status(401).json({
      message: 'Access token not found.'
    });
  }
};

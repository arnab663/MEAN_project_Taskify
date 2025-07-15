
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.userId;
    next();
  } catch {
    res.sendStatus(403);
  }
};

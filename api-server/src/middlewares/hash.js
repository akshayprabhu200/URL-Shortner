function djb2(req, res, next) {
  let str = req.body.url;
  let len = str.length;
  let h = 5381;

  for (let i = 0; i < len; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  str = h >>> 0;
  req.body.hashedURL = str.toString(32);
  next();
}

module.exports = { djb2 };

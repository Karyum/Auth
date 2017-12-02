module.exports = (req, res) => {
  res.cookie('username', '', { maxAge: 0 });
  res.send({});
};

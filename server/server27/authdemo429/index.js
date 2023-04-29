const checkAuth = (req, res, next) => {
  const { password, username } = req.body;
  if (password === '1234' && username === "raul") {
    next();
  } else {
    res.jso({isError: true});
  }
}

module.exports = { checkAuth };
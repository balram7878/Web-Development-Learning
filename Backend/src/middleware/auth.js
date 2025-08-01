const auth=(req, res, next) => {
  const token = parseInt(req.params.token);
  if (token === 23) {
    next();
  } else res.status(401).send("authentication required");
}

module.exports={
    auth,
}
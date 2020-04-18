module.exports = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`${Date.now()} [${req.method}] ${req.path}`)
  next()
}

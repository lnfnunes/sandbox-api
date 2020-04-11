module.exports = (req, res, next) => {
  console.log(`${Date.now()} [${req.method}] ${req.path}`)
  next()
}

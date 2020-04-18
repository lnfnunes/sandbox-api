const fs = require('fs')
const path = require('path')

const removeFileExtension = (filename) => filename.slice(0, -3)
const onlyIndexFiles = (filename) => filename.indexOf('index.js') !== -1
const notIndexFiles = (filename) => !onlyIndexFiles(filename)

function getAllFiles(dir) {
  return fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name]
  }, [])
}

function getAllIndexFiles(dir) {
  return getAllFiles(dir).filter(onlyIndexFiles).map(removeFileExtension)
}

function getAllNonIndexFiles(dir) {
  return getAllFiles(dir).filter(notIndexFiles).map(removeFileExtension)
}

module.exports = {
  getAllFiles,
  getAllIndexFiles,
  getAllNonIndexFiles,
}

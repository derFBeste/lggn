import * as fs from 'fs'
// const path = require('path')
// import * as path from  'path'

import * as path from 'path'

export function createFile() {
  const outputPath = '../output/test.md'
  // fs.promises.mkdir(path.resolve(__dirname, '/output'), {recursive: true})

  // TODO: write to different dir

  fs.writeFile(path.resolve(__dirname, outputPath), 'bababa', {flag: 'w'}, err => {
    if (err) {
      console.error(err)
    }
  })
  // fs.writeFile(`${__dirname}${outputPath}`, 'bababa', {flag: 'w'}, err => {
  //   if (err) {
  //     console.error(err)
  //   }
  // })
}

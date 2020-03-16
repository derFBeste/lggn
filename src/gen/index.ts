import * as fs from 'fs'
import * as path from 'path'

export function createFile(config: Config) {
  const outputPath = `${config.prjctNm}/${config.fileFrmt}.md`
  // fs.promises.mkdir(path.resolve(__dirname, '/output'), {recursive: true})

  console.log(config.prjctNm)
  // TODO: read template/config
  // TODO: use md template as config
  // TODO: gen files
  // TODO: gen headings
  // TODO: output config as part of generation
  fs.mkdirSync(config.prjctNm)

  // fs.writeFile(path.resolve(__dirname, outputPath), 'bababa', {flag: 'w'}, err => {
  //   if (err) {
  //     console.error(err)
  //   }
  // })
  fs.writeFile(outputPath, 'bababa', { flag: 'w' }, err => {
    if (err) {
      console.error(err)
    }
  })
}

interface Config {
  fileFrmt: string;
  headingFrmt: string;
  prjctNm: string;
  endDt?: string;
  startDt?: string;
}

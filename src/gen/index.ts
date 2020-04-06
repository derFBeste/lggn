import * as fs from 'fs'
import { format } from 'date-fns'

export function createFile(config: Config) {
  const dateStr = format(new Date(), 'MM_dd_yyyy')

  console.log('date: ', dateStr)

  const outputPath = `${config.prjctNm}/${dateStr}.md`

  // TODO: read template/config
  // TODO: use md template as config
  // TODO: gen files
  // TODO: gen headings
  // TODO: output config as part of generation
  // TODO: add key for formatting

  fs.mkdirSync(config.prjctNm)

  let iter = 1

  switch (config.duration) {
  case '100 days':
    iter = 10
    console.log('hey!')
    break
  case 'year':
    console.log('hey!')
    break
  case 'month':
    console.log('hey!')
    break
  case 'week':
    console.log('hey!')
    break
  default:
    console.log('hey!')
    break
  }

  fs.writeFile(`${outputPath}`, 'bababa', err => {
    if (err) {
      console.error(err)
    }
  })
}

interface Config {
  duration: '100 days' | 'year' | 'month' | 'week';
  fileFrmt: string;
  headingFrmt: string;
  prjctNm: string;
  endDt?: string;
  startDt?: string;
}

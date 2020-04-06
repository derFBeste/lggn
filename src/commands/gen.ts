import { Command, flags } from '@oclif/command'
import { createFile } from '../gen'
import * as inquirer from 'inquirer'

// TODO: make all options available to set as cli args
// TODO: need gen command at all? or can I make it the default command?

export default class FileGen extends Command {
  static description = 'generate'

  static flags = {
    help: flags.help({ char: 'h' }),
    configure: flags.string({ char: 'c', description: 'configure' }),
  }

  async run() {
    const responses: any = await inquirer.prompt([
      {
        name: 'prjctNme',
        message: 'project name:',
        type: 'input',
      },
      {
        name: 'fileNameFrmt',
        message: 'choose file naming format:',
        type: 'list',
        choices: [
          { name: 'wk_yyyy', value: 'ww_yyyy' },
          { name: 'MM_dd_yyyy', value: 'MM_dd_yyyy' },
          { name: 'yyyy_MM_dd', value: 'yyyy_MM_dd' },
        ],
      },
      {
        name: 'duration',
        message: 'duration (how many files?):',
        type: 'list',
        choices: [
          { name: '100 days', value: '100 days' },
          { name: 'year', value: 'year' },
          { name: 'month', value: 'month' },
          { name: 'week', value: 'week' },
        ],
      },
      {
        name: 'headingFrmt',
        message: 'choose heading format:',
        type: 'list',
        choices: [
          { name: 'day', value: 'day' },
          { name: 'date', value: 'date' },
          { name: 'day number', value: 'day number' },
          { name: 'star date', value: 'star date' },
        ],
      },
      {
        name: 'confirmGen',
        message: 'generate files',
        type: 'confirm',
      },
    ])

    const { confirmGen, duration, fileNameFrmt, headingFrmt, prjctNm } = responses

    if (confirmGen) {
      createFile({ prjctNm, fileNameFrmt, headingFrmt })
      this.log(responses)
    } else {
      this.log('cancelled')
    }
  }
}

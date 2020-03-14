import {Command, flags} from '@oclif/command'
import {createFile} from '../gen'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'

export default class FileGen extends Command {
  static description = 'generate'

  static flags = {
    help: flags.help({char: 'h'}),
    configure: flags.string({char: 'c', description: 'configure'}),
  }

  async run() {
    const responses: any = await inquirer.prompt([
      {
        name: 'dirName',
        message: 'directory name:',
        type: 'input',
      },
      {
        name: 'fileFormat',
        message: 'choose file format:',
        type: 'list',
        choices: [
          {name: 'wk_yyyy', value: 'wk_yyyy'},
          {name: 'mm_dd_yyyy', value: 'mm_dd_yyyy'},
          {name: 'yyyy_mm_dd', value: 'yyyy_mm_dd'},
        ],
      },
      {
        name: 'confirmGen',
        message: 'generate files',
        type: 'confirm',
      },
    ])

    if (responses.confirmGen) {
      this.log(responses)
    } else {
      this.log('cancelling')
    }
  }
}

// TODO: can I use types to config?

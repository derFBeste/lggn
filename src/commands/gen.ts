import {Command, flags} from '@oclif/command'
import {createFile} from '../gen'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'

// TODO: make all options available to set as cli args
// TODO: need gen command at all? or can I make it the default command?

export default class FileGen extends Command {
  static description = 'generate'

  static flags = {
    help: flags.help({char: 'h'}),
    configure: flags.string({char: 'c', description: 'configure'}),
  }

  async run() {
    const responses: any = await inquirer.prompt([
      {
        name: 'projectName',
        message: 'project name:',
        type: 'input',
      },
      // {
      //   name: 'startDt',
      //   message: 'What date should the files start at?',
      //   type: 'input',
      // },
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
        name: 'headingFormat',
        message: 'choose heading format:',
        type: 'list',
        choices: [
          {name: 'day', value: 'day'},
          {name: 'date', value: 'date'},
          {name: 'day number', value: 'day number'},
          {name: 'star date', value: 'star date'},
        ],
      },
      {
        name: 'confirmGen',
        message: 'generate files',
        type: 'confirm',
      },
    ])

    const {confirmGen, fileFormat, headingFormat, projectName} = responses

    if (confirmGen) {
      createFile({prjctNm: projectName, fileFrmt: fileFormat, headingFrmt: headingFormat})
      this.log(responses)
    } else {
      this.log('cancelled')
    }
  }
}

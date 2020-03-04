import {Command, flags} from '@oclif/command'

export default class FileGen extends Command {
  static description = 'generate'

  static flags = {
    help: flags.help({char: 'h'}),

    configure: flags.string({char: 'c', description: 'configure'}),
  }

  async run() {
    const {flags} = this.parse(FileGen)

    this.log('yo!')
  }
}

// TODO: can I use types to config?

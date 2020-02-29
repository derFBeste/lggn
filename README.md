lggn
====

markdown log generation

## **Don't use this until a 1.0 release**

## What it is

A CLI that generates .md files for logging, journaling, or anything else you want to keep chronological track of.

## What it's not

For logging code output. This is not for server logging.

## Why?

Markdown is a great form factor for writing. An editor + markdown is lightweight and often times a better experience than word processors.]\Writing in markdown is a useful workflow for a daily development logs etc.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lggn.svg)](https://npmjs.org/package/lggn)
[![Downloads/week](https://img.shields.io/npm/dw/lggn.svg)](https://npmjs.org/package/lggn)
[![License](https://img.shields.io/npm/l/lggn.svg)](https://github.com/derFBeste/lggn/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lggn
$ lggn COMMAND
running command...
$ lggn (-v|--version|version)
lggn/0.0.0 darwin-x64 node-v13.9.0
$ lggn --help [COMMAND]
USAGE
  $ lggn COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lggn hello [FILE]`](#lggn-hello-file)
* [`lggn help [COMMAND]`](#lggn-help-command)

## `lggn hello [FILE]`

describe the command here

```
USAGE
  $ lggn hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ lggn hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/derFBeste/lggn/blob/v0.0.0/src/commands/hello.ts)_

## `lggn help [COMMAND]`

display help for lggn

```
USAGE
  $ lggn help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->

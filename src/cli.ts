import * as yargs from "yargs"
import { lstat, readdir } from "./verbose-hooks"
import { explore } from "./explorer"

const argv = yargs
  .usage("$0 [-n N] [--verbose] [PATH]")
  .option("concurrent", {
    alias: "n",
    type: "number",
    describe: "Max. concurrent calls (default: no limit)",
    requiresArg: true
  })
  .option("verbose", {
    default: false,
    describe: "Be verbose"
  })
  .demandCommand(0, 1)
  .help()
  .strict().argv

const path = argv._ && argv._.length > 0 ? argv._[0] : "."
const isVerbose = argv["verbose"]

explore(path, {
  readdir: isVerbose && readdir,
  lstat: isVerbose && lstat,

  concurrent: argv["concurrent"] || undefined
})

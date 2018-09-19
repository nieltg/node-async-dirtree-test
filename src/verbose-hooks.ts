import { readdir as fsReaddir, lstat as fsLstat, PathLike, Stats } from "fs"

export function readdir(
  path: PathLike,
  cb: (err: NodeJS.ErrnoException, files: string[]) => void
) {
  console.error(`fs.readdir() BEGIN ${path}`)
  fsReaddir(path, (err, files) => {
    if (err) {
      console.error(`fs.readdir() FAIL ${path}`)
    } else {
      console.error(`fs.readdir() DONE ${path}`)
    }

    cb(err, files)
  })
}

export function lstat(
  path: PathLike,
  cb: (err: NodeJS.ErrnoException, stats: Stats) => void
) {
  console.error(`fs.lstat() BEGIN ${path}`)
  fsLstat(path, (err, stats) => {
    if (err) {
      console.error(`fs.lstat() FAIL ${path}`)
    } else {
      console.error(`fs.lstat() DONE ${path}`)
    }

    cb(err, stats)
  })
}

import { bindNodeCallback, of, from, empty } from "rxjs"
import { expand, switchMap, map } from "rxjs/operators"
import { PathLike, Stats, readdir, lstat } from "fs"
import { join } from "path"

export interface ExploreOption {
  readdir?: (
    path: PathLike,
    cb: (err: NodeJS.ErrnoException, files: string[]) => void
  ) => void
  lstat?: (
    path: PathLike,
    cb: (err: NodeJS.ErrnoException, stats: Stats) => void
  ) => void

  concurrent?: number
}

export function explore(path: string, options: ExploreOption) {
  const rxReaddir = bindNodeCallback(options.readdir || readdir)
  const rxLstat = bindNodeCallback(options.lstat || lstat)

  of(path)
    .pipe(
      expand(
        path =>
          rxLstat(path).pipe(
            switchMap(
              stats =>
                stats.isDirectory()
                  ? rxReaddir(path).pipe(
                      switchMap(names => from(names)),
                      map(name => join(path, name))
                    )
                  : empty()
            )
          ),
        options.concurrent
      )
    )
    .subscribe(path => console.log(path))
}

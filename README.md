# async-dirtree-test

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

List all files available in a directory and its descendants recursively. This demo relies on `fs.readdir()` and `fs.lstat()` for doing its job and is also likely to triggers `ENOENT` error.

## Getting Started

### Installation

```
$ yarn global add async-dirtree-test
```

or:

```
$ npm install -g async-dirtree-test
```

### Commands

To list all files in current directory recursively:

```
$ async-dirtree-test
```

To list all files in current directory recursively with no concurrent calls:

```
$ async-dirtree-test -n 1
```

## License

[MIT](LICENSE)

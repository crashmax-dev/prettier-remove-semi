import type { Plugin } from 'prettier'

const plugin: Plugin = {
  printers: {
    typescript: {
      insertPragma(text) {
        return text.replace(/( ;)/g, '  ')
      },
      print(path, options, print, args?) {
        const value = path.getValue()
        return value.replace(/( ;)/g, '  ')
      }
    }
  }
}

export default plugin

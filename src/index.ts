import prettier from 'prettier/parser-typescript'

const TypeScript = prettier.parsers.typescript

function typescriptParser(): typeof TypeScript {
  return {
    ...TypeScript,
    preprocess(text, options) {
      console.log(text)
      return text
    }
  }
}

export default {
  name: 'prettier-remove-semi',
  parsers: {
    typescript: typescriptParser()
  }
}

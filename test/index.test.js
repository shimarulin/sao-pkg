const path = require('path')
const sao = require('sao')

const generator = path.join(__dirname, '..')

const getPkg = (pkg, fields) => {
  pkg = JSON.parse(pkg)
  return fields.reduce((res, curr) => {
    res[curr] = pkg[curr]
    return res
  }, {})
}

test('use defaults', async () => {
  const helper = await sao.mock({ generator })
  expect(helper.fileList).toMatchSnapshot()
  expect(
    getPkg(await helper.readFile(
      'package.json'),
      ['name', 'author'])
  ).toMatchSnapshot('package.json')
})

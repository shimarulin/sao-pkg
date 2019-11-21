const when = (condition, value, fallback) => (condition ? value : fallback)
const commands = (cmds) => cmds.filter(Boolean).join(' && ') || undefined

module.exports = ({ name, description, author, email, origin }, data) => {
  const pkgUrl = `gitlab.com/shimarulin/${name}`

  return {
    name,
    version: '0.0.0',
    description,
    license: 'MIT',
    // private: true,
    repository: when(origin, {
      type: 'git',
      url: `git+ssh://git@${pkgUrl}.git`,
    }),
    bugs: when(origin, {
      url: `https://${pkgUrl}/issues`,
    }),
    homepage: when(origin, `https://${pkgUrl}#readme`),
    author: `${author} <${email}>`,
  }
}

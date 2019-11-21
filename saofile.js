module.exports = {
  prompts() {
    console.log(this.outFolder)
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default({ name }) {
          return `${name} project`
        },
      },
      {
        name: 'author',
        message: 'What is your name',
        default: this.gitUser.username || this.gitUser.name,
        store: true,
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true,
      },
      {
        name: 'origin',
        message: `The Git repository of this package`,
        default: false,
      },
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore',
          '_package.json': 'package.json',
        },
      },
      {
        type: 'modify',
        files: 'package.json',
        handler: (data) => require('./lib/pkgen')(this.answers, data),
      },
    ]
  },
  async completed() {
    // this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  },
}

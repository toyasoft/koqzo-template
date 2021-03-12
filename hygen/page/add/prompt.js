module.exports = [
  {
    message: 'What is the page dirctory?',
    name: 'dir',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
  {
    message: 'What is the page name?',
    name: 'name',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
]
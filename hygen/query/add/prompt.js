module.exports = [
  {
    message: 'What is the query dirctory?',
    name: 'dir',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
  {
    message: 'What is the query name?',
    name: 'name',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
]
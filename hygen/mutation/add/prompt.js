module.exports = [
  {
    message: 'What is the mutation dirctory?',
    name: 'dir',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
  {
    message: 'What is the mutation name?',
    name: 'name',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
]
module.exports = [
  {
    message: 'What is the component dirctory?',
    name: 'dir',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
  {
    message: 'What is the component name?',
    name: 'name',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
]
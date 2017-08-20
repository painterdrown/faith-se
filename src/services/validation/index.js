const FaithError = require('../../utils/FaithError');
const check      = require('./check');

function getValidatorByRoute(route) {
  switch (route) {
    case '/login' :
    case '/enroll':
      return (param_data) => {
        const fieldnames = ['username', 'password'];
        for (let fieldname of fieldnames) {
          check(fieldname, param_data[fieldname]);
        }
      };
    default:
      throw new FaithError(0, '找不到该路由对应的验证器');
  }
}

function getValidatorByFieldnames(fieldnames) {
  return (param_data) => {
    for (let fieldname of fieldnames) {
      check(fieldname, param_data[fieldname]);
    }
  };
}

exports = module.exports = {
  getValidatorByRoute,
  getValidatorByFieldnames,
};

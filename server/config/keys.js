// is NODE_ENV an existing env variable
if (process.env.NODE_ENV == "production"){
  // we are in prod - return the prod set of keys
  module.exports = require('./prod')


} else{
   module.exports = require('./dev')
}

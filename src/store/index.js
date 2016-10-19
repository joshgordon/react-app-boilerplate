/** Why does this exist? We may want to add additional redux middleware in
    development that we do not need in production. This allows us to control
    which gets used based on the injected node environment when webpack builds
    the app bundle. **/
if (process.env.NODE_ENV === 'production') {
  module.exports = require ('./configureStore.prod');
} else {
  module.exports = require ('./configureStore.dev');
}

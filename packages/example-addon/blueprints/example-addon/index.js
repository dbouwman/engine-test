/* eslint-env node */
module.exports = {
  description: 'Install example-addon dependencies',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(/* options */) {
    // ensure peer dependencies are installed
    this.addPackageToProject('@esri/hub-common', '^1.11.0');
  }
};

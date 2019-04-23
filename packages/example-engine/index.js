/* eslint-env node */
const EngineAddon = require('ember-engines/lib/engine-addon');  // eslint-disable-line node/no-unpublished-require

/**
 * We construct a hash vs inlining to avoid ember complaining about a lint rule
 */
const hash = {
  name: require('./package').name,
  lazyLoading: {
    enabled: true
  }
}

module.exports = EngineAddon.extend(hash);

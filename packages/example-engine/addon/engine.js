import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const hash = {
  modulePrefix,
  Resolver,
  dependencies: {
    // list all the other "internal" routes that are needed here
    externalRoutes: ['home'],
    // we list all the services we need from the host app here...
    services: [
      'appSettings'
    ]
  },
};

const Eng = Engine.extend(hash);
loadInitializers(Eng, modulePrefix);

export default Eng;

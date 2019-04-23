import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const engineHash = {
  exampleEngine: {
    dependencies: {
      externalRoutes: {
        home: 'index'
      },
      services: [
        'appSettings'
      ]
    }
  }
}

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: engineHash
});

loadInitializers(App, config.modulePrefix);

export default App;

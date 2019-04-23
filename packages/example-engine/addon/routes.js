import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('index', {path: '/'});
  this.route('edit', {path: '/edit'});
});

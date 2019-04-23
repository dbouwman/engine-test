import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | app-settings', function(hooks) {
  setupTest(hooks);

  test('clone', function(assert) {
    let service = this.owner.lookup('service:app-settings');
    // just verify that we can call clone,
    // really to test this we'd stub cloneObject() and verify that it was called
    const obj = { string: 'hi' };
    const clone  = service.clone(obj);
    assert.deepEqual(obj, clone, 'clone is deep equal');
    assert.notEqual(obj, clone, 'clone is not the same object');
  });
});

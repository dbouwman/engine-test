import Component from '@ember/component';
import layout from './template';
// import from Hub.js packages that are direct dependencies of this addon
import { getHubApiUrl } from '@esri/hub-common';
import { getEventQueryFromType } from '@esri/hub-events';

export default Component.extend({
  layout,
  init () {
    this._super(arguments);
    // demonstrate that we can use the fns from the Hub.js packages
    const ro = {
      portal: 'https://custom.maps.arcgis.com/sharing/rest'
    };
    this.set('hubApiUrl', getHubApiUrl(ro));
    const options = getEventQueryFromType('upcoming', {});
    /* eslint-disable no-console */
    console.log({ options });
    /* eslint-enable no-console */
  }
});

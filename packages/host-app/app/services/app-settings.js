import Service from '@ember/service';
// let's pretend the app needs to use @esri/hub-common
import { cloneObject } from '@esri/hub-common';

/**
 * Just some host-app service we can pass in...
 */
export default Service.extend({
  clone (obj) {
    return cloneObject(obj);
  }
});

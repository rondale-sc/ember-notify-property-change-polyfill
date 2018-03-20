'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-notify-property-change-polyfill',
  included: function() {
    this._super.included.apply(this, arguments);

    var checker = new VersionChecker(this);
    var emberVersion = checker.forEmber();

    if (emberVersion.lt('3.1.0')) {
      this.import('vendor/install-notify-property-change-polyfill.js');
    }
  }
};

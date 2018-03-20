(function() {
  var _Ember;

  if (typeof Ember !== 'undefined') {
    _Ember = Ember;
  } else {
    _Ember = require('ember').default;
  }

  if (!_Ember.notifyPropertyChange) {
    Object.defineProperty(_Ember, 'notifyPropertyChange', {
      get: function() {
        return function(object, key) {
          return object.notifyPropertyChange(key);
        }
      }
    });
  }
})()


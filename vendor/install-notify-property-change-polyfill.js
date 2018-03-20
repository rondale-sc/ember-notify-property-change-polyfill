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
          if (object.notifyPropertyChange) {
            object.notifyPropertyChange(key);
          } else {
            _Ember.propertyWillChange(object, key);
            _Ember.propertyDidChange(object, key);
          }
        }
      }
    });
  }
})()


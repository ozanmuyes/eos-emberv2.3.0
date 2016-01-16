import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    persistUser: function () {
      this.get("model").save().then(function () {
        this.transitionToRoute('users.index');
      }.bind(this));

      // prevent bubbling
      return false;
    }
  }
});

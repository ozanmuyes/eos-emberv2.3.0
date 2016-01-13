import Ember from 'ember';

Ember.Logger.info("users/create controller");

export default Ember.Controller.extend({
  user: function () {
    return this.store.createRecord("user");
  }.property(),

  actions: {
    onSubmit: function () {
      this.get("user").save().then(function () {
        this.transitionTo('users.index');
      }.bind(this));
    }
  }
});

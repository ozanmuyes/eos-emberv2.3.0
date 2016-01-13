import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

Ember.Logger.info("users(/index) route");

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    return this.store.findAll("user");
  }
});

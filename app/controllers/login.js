import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Controller.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  actions: {
    authenticate: function () {
      let credentials = this.getProperties('identification', 'password');

      this.get("session").authenticate("authenticator:jwt", credentials).catch((reason) => {
        this.set('errorMessage', reason.errors.detail || reason.errors.title);
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function () {
      let credentials = this.getProperties("identification", "password"),
          authenticator = "authenticator:jwt";

      this.get("session").authenticate(authenticator, credentials);
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  credentials: Ember.Object({
    email: null,
    password: null
  }),
  error: null,

  actions: {
    logUserIn() {
      // reset the error while trying to authenticate the credentials
      this.set("error", null);

      this.get("session").authenticate("authenticator:jwt", {
        identification: this.get("credentials").email,
        password: this.get("credentials").password
      }).catch((reason) => {
        Ember.Logger.error(reason);
        this.set("error", reason);
      });

      // prevent bubbling
      return false;
    }
  }
});

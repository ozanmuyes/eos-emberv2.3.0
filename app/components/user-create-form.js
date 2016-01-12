import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {
    first_name: "",
    middle_name: "",
    lsst_name: "",
    email: ""
  },
  actions: {
    createUser: function () {
      console.log(this.get("newUser"));
      return;

      var store = this.store;

      store.createRecord("user", {
        first_name: "foo"
      });
    }
  }
});

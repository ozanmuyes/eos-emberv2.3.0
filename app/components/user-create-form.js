import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['eos-component', 'component-user-create-form'],
  classNameBindings: ['_error:has-error'],

  first_name: "",
  last_name: "",
  email: "",
  _error: null,

  submit () {
    Ember.Logger.info(
      "User create form component submit with " +
      "email: '" + this.get("email") + "' " +
      "password: '" + this.get("password") + "'."
    );

    this.get("onSubmit")(this.get("first_name"), this.get("last_name"));

    // prevent bubbling
    return false;
  }
});

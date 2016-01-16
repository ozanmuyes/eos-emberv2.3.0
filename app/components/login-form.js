import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['eos-component', 'component-login-form'],
  classNameBindings: ['error:has-error'],
  error: null,

  actions: {
    submit() {
      // TODO Consider Parsley validation

      this.get("onSubmit")();

      // prevent bubbling
      return false;
    }
  }
});

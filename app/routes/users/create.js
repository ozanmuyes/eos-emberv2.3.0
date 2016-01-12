import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

console.log("users/create route");

export default Ember.Route.extend(AuthenticatedRouteMixin, {
});

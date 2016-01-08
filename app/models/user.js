import DS from 'ember-data';

export default DS.Model.extend({
  userGroups: DS.belongsTo("user-group"),
  first_name: DS.attr("string"),
  middle_name: DS.attr("string", { defaultValue: null }),
  last_name: DS.attr("string"),
  email: DS.attr("string"),
  created_at: DS.attr("date"),
  updated_at: DS.attr("date"),
  deleted_at: DS.attr("date", { defaultValue: null })
});

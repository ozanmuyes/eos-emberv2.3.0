import DS from 'ember-data';

export default DS.Model.extend({
  users: DS.hasMany("user"),
  permissions: DS.hasMany("permission"),
  name: DS.attr("string"),
  title: DS.attr("string", { defaultValue: null }),
  created_at: DS.attr("date"),
  updated_at: DS.attr("date"),
  deleted_at: DS.attr("date", { defaultValue: null })
});

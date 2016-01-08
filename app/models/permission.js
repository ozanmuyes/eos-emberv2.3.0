import DS from 'ember-data';

export default DS.Model.extend({
  userGroups: DS.belongsTo("user-group"),
  name: DS.attr("string"),
  title: DS.attr("string", { defaultValue: null }),
  description: DS.attr("string", { defaultValue: null }),
  created_at: DS.attr("date"),
  updated_at: DS.attr("date"),
  deleted_at: DS.attr("date", { defaultValue: null })
});

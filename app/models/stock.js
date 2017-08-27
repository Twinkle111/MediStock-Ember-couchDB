import DS from 'ember-data';

export default DS.Model.extend({
  medicinename: DS.attr('string'),
  quantity: DS.attr('number'),
  price: DS.attr('number')
});

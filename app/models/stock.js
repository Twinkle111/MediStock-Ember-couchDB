import DS from 'ember-data';

export default DS.Model.extend({
  medicinename : DS.attr('string'),
  quantity :DS.attr('number'),
  price: DS.attr('number'),
  rev         : DS.attr('string')    // <-- Add this to all your models
});
// // import DS from 'ember-data';
// //
// // export default DS.Model.extend({
// //   medicinename: DS.attr('string'),
// //   quantity: DS.attr('number'),
// //   price: DS.attr('number')
// // });
//
//
// import DS from 'ember-data';
// import { Model } from 'ember-pouch';
//
// export default Model.extend({
//   medicinename: DS.attr('string'),
//   quantity: DS.attr('number'),
//   price: DS.attr('number')
// });

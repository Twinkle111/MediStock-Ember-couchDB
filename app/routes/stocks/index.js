import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('stock');
  },

  actions: {

    deleteStock(stock) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        stock.destroyRecord();
      }
    }
  }
})

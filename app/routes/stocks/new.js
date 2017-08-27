import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('stock');
  },

  actions: {

    saveStock(newStock) {
      newStock.save().then(() => this.transitionTo('stocks'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});

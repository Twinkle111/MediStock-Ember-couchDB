// app/router.js

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('stocks', function() {
    this.route('new');
    this.route('edit', { path: '/:stock_id/edit' });
  });
  this.route('stock', function() {});
});

export default Router;

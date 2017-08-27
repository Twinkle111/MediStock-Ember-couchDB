import { DocumentAdapter } from 'ember-couch';

export default DocumentAdapter.extend({
   host: 'localhost:5984',
   db: 'medistock'
   //namespace: '_design/view2/_view/data'
});

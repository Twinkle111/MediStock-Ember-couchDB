// app/adapters/application.js

import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var remote = new PouchDB('http://localhost:5984/medistock');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the connection is lost
});
PouchDB.debug.enable('*');

export default Adapter.extend({
  db: db
});

// ENV.emberPouch.localDb = 'test';
// ENV.emberPouch.remoteDb = 'http://localhost:5984/my_couch';

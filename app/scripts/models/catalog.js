var Backbone = require('backbone');

var Catalog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: ''
  }
});

var CatalogCollection = Backbone.Collection.extend({
  model: Catalog,
});


module.exports = {
  Catalog,
  CatalogCollection
};

var Backbone = require('backbone');

var Cart = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: ''
  }
});

var CartCollection = Backbone.Collection.extend({
  model: Cart,
});


module.exports = {
  Cart,
  CartCollection
};

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 0,
  },
  initialize: function(){
    $('#num-span').text(this.get('likes'));
  },
  like: function(){
    this.set('likes', (this.get('likes') + 1));
    $('#num-span').text(this.get('likes'));
    $('#like-span').text(' Likes');
  },
  toJSON: function(options){
    if (this.get('likes') === 1){
      $('#like-span').text('Like');
    }

    // return _.clone(this.attributes); Could use this to restore the original toJSON functionality
    return Backbone.Model.prototype.toJSON.call(this, options);
  }
});

module.exports = {
  'LikeButton': LikeButton
};

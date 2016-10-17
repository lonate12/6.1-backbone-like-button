var Backbone = require('backbone');
var $ = require('jquery');

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
  toJSON: function(){
    if(this.get('likes') === 1){
      $('#like-span').text('Like');
    }
  }
});

module.exports = {
  'LikeButton': LikeButton
};

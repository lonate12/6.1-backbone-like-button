var Backbone = require('backbone');

var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 0,
    like: function(){
      this.set('likes', (this.get('likes') + 1));
    }
  },
  initialize: function(){
    $('#like-btn').textContent(this.get('likes'));
  }
});

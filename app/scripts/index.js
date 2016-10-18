var models = require('./models/like.js');
var $ = require('jquery');


$(function(){
  var likeButton = new models.LikeButton();

  $('#like-btn').on('click', function(event){
    event.preventDefault();
    likeButton.like();
    likeButton.toJSON();
  });
});

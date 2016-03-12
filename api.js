$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https//api.github.com/orgs/facebook/repos",
    success: function(repos)
  })
})
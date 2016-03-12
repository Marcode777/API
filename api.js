$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https//api.github.com/orgs/facebook/repos",
    success: function(repos){
      console.log("this is works");
    },
      error: function(jqXHR, textStatus, erroThrown){
        alert("this works")
      }
  })
})



//use darksky or googlemaps instead of twitter because they will not require authentication 
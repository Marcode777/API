



$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.forecast.io/forecast/3078412bdf77c7710a96da902df7f6c7/LATITUDE,LONGITUDE
",
    success: function(repos){
      console.log("this is works");
    },
      error: function(jqXHR, textStatus, erroThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
  })
})



//use darksky or googlemaps instead of twitter because they will not require authentication 
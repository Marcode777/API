$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/facebook/repos",
    success: function(repos){ 
      for(var i=0; i<repos.length; i++){
        var newRepoUrl = buildRepoUrl(repos[i])
        $(".list-group").append(newRepoUrl); 
      }
    },
      error: function(jqXHR, textStatus, erroThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
  }); //this is the boundary for the entire ajax call object; we want to define the buildListGroup function outside of the ajax call object, but keep it within the document.ready 

    function buildRepoUrl(repoData){
      var commitsApiUrl = "https://api.github.com/repos/";
      commitsApiUrl += repoData.owner.login + "/";
      commitsApiUrl += repoData.name + "/commits";

      var newLink = $("<a>")
        .attr("href", commitsApiUrl)
        .addClass("list-group-item")
        .append( repoData.full_name);
      return newLink;
    }
});



//use darksky or googlemaps instead of twitter because they will not require authentication 
// line 6: append is a jQuery method that inserts content into specific elements, in this case, the list-group element in the html page
//line 5 : repos is actually coming from the data from the endpoint provided in the url endpoint, conversely, it could also just called data, or whatever you want to call it, it will function just the same
//line 5: the for-loop will go through the entire length of the repo data 
//line 7: the .name method will list the actual names of the repos, now it's been changed to newListItem
//* remember GitHub will limit repo count to around 30 repos
// += is just a form of appending or concatenating
//line 7-8: the variable newRepoUrl will build repo the entire array of data that contains the repo urls, and then it will be added to the list-group element on the html page it can be displayed
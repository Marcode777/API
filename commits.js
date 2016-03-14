$(document).ready(function(){
  $(document).on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits){
        $("tbody").empty(); 
        for(var i =0; i <commits.length; i++){
          $("tbody").append(buildTableRow(commits[i]));
        } 
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);

      }
    });
    function buildTableRow(commitData){

      var shaTd = $("<td>").append(commitData.sha);
      var authorTd = $("<td>").append(commitData.author.login);
      var messageTd = $("<td>").append(commitData.commit.message);
      var dateTd = $("<td>").append(commitData.commit.author.date);

      return $("<tr>").append(shaTd)
      .append(authorTd)
      .append(messageTd)
      .append(dateTd);
    }
  })
});

//e.preventDefault(); prevents the default action, in this case loading a whole page once a link is clicked
// the for loop in line 9 will access the commits individually, the [i] array will give you the first item in the array because i starts from 0 in i = 0;
//now line 10 has been changed, so we use the jquery .append method in order to add content to an element (in this case, the tbody, and within that the tr and finally the td) on the html page so that it can be displayed
// so the 4 tds will be populated with content 
// line 9: we want to clear the table when click on a new repo, so we're using a jquery method .empty(); to clear or empty the table 
// line 11: 
// a function, buildTableRow is created in order to populate the table data we have 
// lines 23-26, these table data catagories will be appended to in order to populate with commitdata, whatever is after the appended commitData, e.g., commitData.sha, commitData.author.login, commitData.message and commitData.date will have their appropriate data
// lines 28-32, using return so that when the buildTableRow function is called, the whole table row is actually appended
// note that this is dynamically interacting with an API, the webpage does not have to refresh (this is the purpose of ajax via jquery), and the markups on the webpage are being dynamically updated 
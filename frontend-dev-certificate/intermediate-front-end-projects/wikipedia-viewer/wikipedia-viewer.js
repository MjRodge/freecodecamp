$(document).ready(function() {
  //runs a search when search button is pressed
  $('#submitButton').click(function() {
    $("#results").empty(); //empty page of results for subsequent searches
    getResults($('#input').val());
  });
  //runs a search when enter key is pressed while form is active
  $("#input").keypress(function(event) {
    if (event.which == 13) {
      $("#results").empty(); //empty page of results for subsequent searches
      getResults($('#input').val());
     }
  });

  //Prevents page reloading upon clicking submit button
  $("#wikiSearch").submit(function(e) {
    e.preventDefault();
  });
});

function getResults(search) {
  //alert(search);
  var apiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&prop=revisions&rvprop=content&format=json&callback=?";
  $.getJSON(apiLink, function(searchResults){
   for (var i = 0; i < searchResults[2].length; i++) {
     $("#results").append("<a href='"+searchResults[3][i]+"' target='_blank'>"+
                            "<div class='resultItem'>"+
                            "<h3>"+searchResults[1][i]+"</h3>"+
                            "<p>"+searchResults[2][i]+"</p>");
   }
  });
  //alert(apiLink);
}

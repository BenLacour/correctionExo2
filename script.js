$('button').on('click', () => {

  // Using the core $.ajax() method
  $.ajax({

    url: "answer.php",

    // The data to send (will be converted to a query string)
    data: {
      requete: "exercice2"
    },

    // Whether this is a POST or GET request
    type: "POST",

    // The type of data we expect back
    dataType: "json",
  })

    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function (json) {
      $('h1').text(json.title);
      $('.answer').text(json.content);
      $('button').css("background-color", "red")
      //alert("The request is complete!");
    })

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function (xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })

  // // Code to run regardless of success or failure;
  // .always(function (xhr, status) {
  //   alert("The request is complete!");
  // });

})



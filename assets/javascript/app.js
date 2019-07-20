$(document).ready(function() {

    //list of animes
    var animes = ["My Hero Acidamia", "Pokemon ", "Doraemon", "Tokyo Ghoul", "Dragon Ball", "Raki", "My Hero Acidamia", "Fairy Tail", "Naruto", "Sword Art Online", "Charlotte", "Clannad", "Angel Beats!", "Mirai Nikki", "Toradora", "Kimi no Na wa", "Bleach", "K-On!"]
    GIFArea = "";

    //function for displaying anime data
    function renderButtons() {
        ""
        //deleate the button before adding new button
        $("#animes-view").empty();

        //looping through the array of animes
        for (var i = 0; i < animes.length; i++) {

            //dynamically generate buttons for each movie in the array.
            //this code $("<button>") is all jquery needs to create the start and end tag. (<button></button>)
            var a = $('<button>');
            //Adding a class
            a.addClass('anime');

            //adding a data-attribute with a value of the television at index i
            a.attr('data-name', animes[i]);
            //providing the button's text with a value of the anime at index i
            a.text(animes[i]);
            //adding the button the html
            $("#animes-view").append(a);
        }

        $("#anime-input").focus();

    }
    renderButtons();

    //============CLICK BUTTON/ LISTENERS==================================
    //this function handles events where one button is clicked
    $("#add-anime").on('click', function() {

        //event.preventDefault() prevents the form from trying to submit itself
        //we're using a form so that the user can hit enter instread of clicking the button
        event.preventDefault();

        //This line will grab the text from the input box
        var anime = $("#anime-input").val().trim();

        //this movie from the textbox is then added to our array
        animes.push(anime);

        //calling renderButtons which handles the processing of our movie array
        renderButtons();

    });

    //==============Dislpay result what we get from API==============================
    $(document).on('click', 'button', function() {
        // Deleting the animes prior to adding new animes in order to avoid repetetive buttons
        $('#GIFArea').empty();
        // 'this' refers to the button that was clicked
        var b = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + b + "&api_key=Cm28gxtrNhDU8x05Sa0h1kHt8UXNPYf0&limit=12";
        console.log(queryURL);

        //ajax call to get request
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            //after the data comes back from the API
            .done(function(response) {
                console.log(response);
                //Storing an array of results in the results variable
                var results = response.data;
                //Looping over every result item
                for (var i = 0; i < results.length; i++) {
                    //creating a div with the class item
                    var gifDiv = $('<div class="item">');
                    //storing the result items rating        
                    var rating = results[i].rating;
                    //creating an element to have the rating displayed
                    var r = $('<p>').text("Rating: " + rating);
                    //creating a image tag
                    var gifImage = $('<img>');
                    //giving the image tag an src attribute of a property pulled off the result item
                    gifImage.attr('src', results[i].images.fixed_height_still.url)
                        .attr('data-still', results[i].images.fixed_height_still.url)
                        .attr('data-animate', results[i].images.fixed_height.url)
                        .attr('data-state', "still")
                        .addClass("showImage");
                    //displaying the rating & image
                    gifDiv.append(r)
                        .append(gifImage);

                    //adding the data                
                    $('#GIFArea').prepend(gifDiv);
                }

            });
    });

    //====================Still and Animate Image ==================================
    // Listens for a click on any image (dynamic)
    $(document).on('click', '.showImage', function() {

        var state = $(this).data('state');
        //If the clicked image's state is still, update its src attribute to what its data-animate value is
        if (state == "still") {
            console.log("still image works");
            // Then, set the image's data-state to animate
            $(this).attr('src', $(this).data('animate'))
                .data('state', 'animate');
        } else {
            //  else set src to the data-still value
            console.log("animated image works");
            $(this).attr('src', $(this).data('still'))
                .data('state', 'still');
        }
    });
});
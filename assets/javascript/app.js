$(document).ready(function() {

    //list of animes
    var animes = ["Naruto", "Pokemon ", "Doraemon", "Tokyo Ghoul", "Dragon Ball", "Raki", "My Hero Acidamia", "Fairy Tail", "Sword Art Online", "Charlotte", "Clannad", "Angel Beats!", "Mirai Nikki", "Toradora", "Kimi no Na wa", "Bleach", "Another", "K-On!"]
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
        animes.push(movie);

        //calling renderButtons which handles the processing of our movie array
        renderButtons();

    });






});
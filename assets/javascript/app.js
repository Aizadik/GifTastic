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

});
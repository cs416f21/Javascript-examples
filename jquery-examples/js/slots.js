    // 1. Create a click event for the button
    // 2. Write a function that changes the src attribute of each image when the button is clicked

    // Store the image names in an array
    const images = ['cat.jpeg', 'bear.jpeg', 'bridge.jpeg', 'cat2.jpeg'];

    // Set an event listener for the button and execute a function that changes images' src attribute to change images
    $('button').click(changeImage);
    function changeImage() {

        // Better solution -- less repetitive
        $('img').each(function (index, element) {
            $(element).attr("src", "img/"+ images[generateRandom()]);
        });

        // Okay solution, but a little bit repetitive (see the better solution above)
        /*  $('#slot-1').attr("src", "img/"+ images[generateRandom()]);
        $('#slot-2').attr("src", "img/"+ images[generateRandom()]);
        $('#slot-3').attr("src", "img/"+ images[generateRandom()]);*/
    }

    function generateRandom() {
        return Math.floor(Math.random() * images.length)
    }

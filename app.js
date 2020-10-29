

var i = 0;
var time = 3000;
var images = [];

// image list

images[0] = 'images/mandela0.jpg';
images[1] = 'images/mandela1.jpg';
images[2] = 'images/mandela2.jpg';
images[3] = 'images/mandela3.jpg';
images[4] = 'images/mandela4.jpg';

// function to change image 

function changeImage() {
    document.images.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time );
}




// get quotes 

const mandelaQuotes  = [
        "(1)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "(2)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "(3)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "(4)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "(5)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "(6)Lorem ipsum dolor sit amet, consectetur adipiscing elit"
];
    

const randomQuote = Math.floor(Math.random() * mandelaQuotes.length);


function getQuote() {
    document.getElementById('quote').textContent = mandelaQuotes[randomQuote];

}



window.onload = changeImage;
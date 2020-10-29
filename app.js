// const imageArray = [
//     "images/mandela0.jpg",
//     "images/mandela1.jpg",
//     "images/mandela2.jpg",
//     "images/mandela3.jpg",
//     "images/mandela4.jpg"
// ];

// let myImage = document.getElementById("images");

// let imageIndex = 0;

// function changeImage(){
//     myImage.setAttribute("src", imageArray[imageIndex]);
//     imageIndex++;
//     if (imageIndex > 5) {
//         imageIndex = 0;
//     }
// }

// window.onload = function() {
//     changeImage();
// };

// traverys way 

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
    

// var text = "";
// var arr;
// for (arr = 0; arr < mandelaQuotes.length; arr++) {
//   text += mandelaQuotes[arr] + ", ";
// };


const randomQuote = Math.floor(Math.random() * mandelaQuotes.length);


function getQuote() {
    document.getElementById('quote').textContent = mandelaQuotes[randomQuote];

}

// console.log(randomQuote, mandelaQuotes[randomQuote]);

// var j = 0;
// var quotes = ['test'];

// let myQuote = document.getElementById("quote");

// function getQuote() {
//     document.getElementById('quote').textContent = quotes[j];

// }


// mandelaQuotes {
//     "(1)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     "(2)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     "(3)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     "(4)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     "(5)Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     "(6)Lorem ipsum dolor sit amet, consectetur adipiscing elit"
// }


window.onload = changeImage;
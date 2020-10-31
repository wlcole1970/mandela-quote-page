

var i = 0;
var time = 4000;
var images = [];

// image list

images[0] = 'images/mandela0.jpg';
images[1] = 'images/mandela1.jpg';
images[2] = 'images/mandela2.jpg';
images[3] = 'images/mandela3.jpg';
images[4] = 'images/mandela4.jpg';
images[5] = 'images/mandela5.jpg';

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
        "It always seems impossible until it's done.",
        "Do not judge me by my success, judge me by how many times I fell down and got back up.",
        "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.",
        "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
        "Education is the most powerful weapon which you can use to change the world.",
        "I learnt that courage was not the absence of fear, but the triumph over it. I felt fear myself more times than I can remember, but I hid it behind a mask of boldness. The brave man is not he who does not feel afraid, but he who conquers the fear.",
        "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
        "Hope is a powerful weapon and no one power on earth can deprive you of.",
        "To deny people their human rights is to challenge their very humanity. To impose on them a wretched life of hunger and deprivation is to dehumanise them.",
        "In the end we must remember that no amount of rules or their enforcement will defeat those who struggle with justice on their side.",
        "We should never forget those on whose shoulders we stand and those who paid the supreme price for freedom.",
];
    

const randomQuote = Math.floor(Math.random() * mandelaQuotes.length);


function getQuote() {
    document.getElementById('quote').textContent = mandelaQuotes[randomQuote];

}

// clear quote 
const clearQuote = document.getElementById('quote');

function removeQuote() {
    clearQuote.remove();
    location.reload(true);

};

window.onload = changeImage;
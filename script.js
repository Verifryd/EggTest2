document.addEventListener('DOMContentLoaded', function () {
    // Get the widget element
    const widgetElement = document.getElementById('rabbitHoleButton');

    document.getElementById('easterEgg').addEventListener('click', onEasterEggClick);

    // Add an event listener for the hypothetical "walletConnected" event
    widgetElement.addEventListener('walletConnected', function() {
        // Redirect to the home page
        window.location.href = 'home.html';
    });
});

function onEasterEggClick() {
    // Show the widget div
    document.getElementById('connectWidget').style.display = 'block';

    // Manually initialize the widget
    const widgetElement = document.querySelector('[data-widget="m-connect"]');
    if (widgetElement) {
        window['m-connect'].init(widgetElement);
    }
}

window.onload = function() {
// Variables for Fabergé Egg
var fabergeButton = document.getElementById('purchaseButton');
var fabergeVideo = document.getElementById('productVideo');

// Variables for Kringle Kronic
var kringleButton = document.getElementById('kringleproductButton');
var kringleVideo = document.getElementById('kringleproductVideo');

// Variables for Don't Press the Egg
var dpteButton = document.getElementById('dptepurchaseButton');
var dpteVideo = document.getElementById('dpteproductVideo');

if (fabergeButton && fabergeVideo) {
    fabergeButton.addEventListener('click', function() {
        document.getElementById('fabergeImage').style.display = 'none';
        fabergeVideo.style.display = 'block';
        fabergeVideo.play();
        this.style.display = 'none';

        fabergeVideo.addEventListener('ended', function() {
            document.getElementById('fabergeImage').src = 'assets/EarlyEggcessA.gif';
            document.getElementById('fabergeImage').style.display = 'block';
            fabergeVideo.style.display = 'none';
            document.getElementById('nextButton').disabled = false;
            localStorage.setItem('fabergeProductViewed', 'true');
        });
    });
}

if (kringleButton && kringleVideo) {
    kringleButton.addEventListener('click', function() {
        document.getElementById('kringleImage').style.display = 'none';
        kringleVideo.style.display = 'block';
        kringleVideo.play();
        this.style.display = 'none';

        kringleVideo.addEventListener('ended', function() {
            document.getElementById('kringleImage').src = 'assets/EarlyEggcessB.gif';
            document.getElementById('kringleImage').style.display = 'block';
            kringleVideo.style.display = 'none';
            document.getElementById('nextButton').disabled = false;
            localStorage.setItem('kringleProductViewed', 'true');
        });
    });
}

if (dpteButton && dpteVideo) {
    dpteButton.addEventListener('click', function() {
        document.getElementById('DPtEImage').style.display = 'none';
        dpteVideo.style.display = 'block';
        dpteVideo.play();
        this.style.display = 'none';

        dpteVideo.addEventListener('ended', function() {
            document.getElementById('DPtEImage').src = 'assets/EarlyEggcessC.gif';
            document.getElementById('DPtEImage').style.display = 'block';
            dpteVideo.style.display = 'none';
            document.getElementById('nextButton').disabled = false;
            localStorage.setItem('DPtEProductViewed', 'true');
        });
    });
}

    // If the 'kringleProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('kringleProductViewed')) {
        document.getElementById('kringleLink').onclick = function(event) {
            event.preventDefault();
        }
    }

    // If the 'DPtEProductViewed' flag is not set in localStorage, disable the link
    if (!localStorage.getItem('DPtEProductViewed')) {
        document.getElementById('DPtELink').onclick = function(event) {
            event.preventDefault();
        }
    }
};
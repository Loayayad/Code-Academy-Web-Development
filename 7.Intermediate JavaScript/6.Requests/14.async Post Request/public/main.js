// information to reach API
const apiKey = '673e0748d04d447390586be9e1254064';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            //renderRawResponse(jsonResponse);
            renderResponse(jsonResponse);
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

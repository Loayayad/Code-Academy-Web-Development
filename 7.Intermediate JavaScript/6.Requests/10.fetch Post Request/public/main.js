// Information to reach API
const apiKey = '673e0748d04d447390586be9e1254064';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
        },
        body: data
    }).then(response => {
        if (response.ok) {
            return response.json();
            //renderJsonResponse(response);
        }
        throw new Error('Request failed!');

    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        renderResponse(jsonResponse);
        //renderRawResponse(jsonResponse);
    });

}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild)
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

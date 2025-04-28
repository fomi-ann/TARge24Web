
// Create reference to all html elements
// Make object containing key value pairs
const form = {
    username: document.getElementById('username'), // matches the ID
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    messages: document.getElementById('form-messages')
};

console.log(form);

// Add event listener to the submit button
form.submit.addEventListener('click', () => {
    // console.log('button pressed') // test
    const request = new XMLHttpRequest();

    // when the request comes back 
    // on server response attempt to parse the response as json (try converting json string into JS object)
    request.onload = () => {
        // console.log(request.responseText); // test response from the server
        let responseObject = null;

        // try catch if no JSON provided from server
        // responseObject contains both ok and messages properties
        try {
            responseObject = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON');
        }

        if (responseObject) {
            handleResponse(responseObject);
        }
    };

    // Get values from form object
    const requestData = `username=${form.username.value}&password=${form.password.value}`;
    console.log(requestData);

    // POST request to the check-login.php file
    request.open('post', 'check-login.php');
    // set request header: server will expect to see a request body which is formated as key:value pair string
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // send request
    request.send(requestData);
});

function handleResponse(responseObject) {
    if (responseObject.ok) {
        location.href = 'dashboard.html';
    } else {
        while (form.messages.firstChild) {
            form.messages.removeChild(form.messages.firstChild);
        }

        // Loop through all the messages from the server and make a new list item tag for each message
        responseObject.messages.forEach((message) => {
            const li = document.createElement('li');
            li.textContent = message;
            form.messages.appendChild(li);
        });

        form.messages.style.display = "block";
    }
}
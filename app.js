//API tutorial by Tania Rascia
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//this appends the logo and container div to the app root
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

//opens a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //accessing JSON data here
    var data = JSON.parse(this.response);
    //checks if connection is good
    if(request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
          
        //create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        //create a p and set the text content to the film's description
        const p = document.createElement('p');
        movie.description = movie.description//limit to 300 characters
        p.textContent = `${movie.description}`;//end with an ellipses

        //append the cards to the container element
        container.appendChild(card);

        //each card will contain an h1 an a p
        card.appendChild(h1);
        card.appendChild(p)
    });
    } else {
        console.log('error');
    }   
}


//send request
request.send();


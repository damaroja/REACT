



//try catch con fetchAPI

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error));

import fetch  from 'node-fetch';

const peticion = async () => {
    try {
        const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log('Error:', error);
    }
}

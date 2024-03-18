

//Explicacion sobre fetchAPI
// fetchAPI es una funcion que nos permite hacer peticiones a un servidor, ya sea para obtener informacion o para enviar informacion
// fetchAPI es una funcion que recibe como parametro la url a la que queremos hacer la peticion
// fetchAPI devuelve una promesa que resuelve en la respuesta del servidor
// fetchAPI es una funcion que recibe un segundo parametro que es un objeto con las opciones de la peticion
// fetchAPI es una funcion que devuelve una promesa que resuelve en un objeto Response
// fetchAPI es una funcion que devuelve una promesa que resuelve en un objeto Response que tiene un metodo json que devuelve una promesa que resuelve en los datos de la respuesta del servidor

//Ejemplo de fetchAPI
// fetch('https://api.github.com/users/alejandrogarcia')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

//Ejemplo de fetchAPI con opciones
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body

// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//  
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

//Ejemplo de fetchAPI con opciones y body y headers y status
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))

//Ejemplo de fetchAPI con opciones y body y headers y status y statusText
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect y referrer
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))

//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect y referrer y referrerPolicy
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     })
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {

//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect y referrer y referrerPolicy y mode

// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//  
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     }),
//     mode: 'cors'
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect y referrer y referrerPolicy y mode y credentials
// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },
//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     }),
//     mode: 'cors',
//     credentials
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


//Ejemplo de fetchAPI con opciones y body y headers y status y statusText y redirect y referrer y referrerPolicy y mode y credentials y cache

// fetch('https://api.github.com/users/alejandrogarcia', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//
//     },

//     body: JSON.stringify({
//         name: 'Alejandro',
//         age: 25
//     }),
//     mode: 'cors',
//     credentials: 'omit',
//     cache: 'no-cache'
// })

//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Error en la peticion')
//         }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.error(error))


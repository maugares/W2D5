/* // Using Fetch

Use httpie to do a request to https://swapi.co/api/people/3/. 

- What does the response look like?
  It looks like and HTML file.

- What is the data type?
  text/html

----------------------------------------------------------

Use the Fetch API to call https://swapi.co/api/people/3/.

From the response object, get the URL in the property homeworld and fetch that URL as well.
console.log the name of the planet. Do all of this in a single chain of promises. */

const fetch = require("node-fetch")

fetch("https://swapi.co/api/people/3/")
  .then(response => response.json())
  .then(obj => {
    fetch(obj.homeworld)
      .then(response2 => response2.json())
      .then(obj2 => console.log(`The name of the planet is ${obj2.name}`))
      .catch(error => console.log(`There was an error`))
  }
  )


// Using SuperAgent for fetching information

const superagent = require("superagent")

superagent.get('https://swapi.co/api/films/1/')
  .then(response => console.log(response.body))
  .catch(error => console.log(`error`))
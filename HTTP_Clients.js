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

const fetchObject = http "https://swapi.co/api/people/3/"


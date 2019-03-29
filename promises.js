import { rejects } from "assert";

/*
How to make a callback interface. 
*/

const documents = {
  1: { content: "I am a document", authorId: 1 },
  2: { content: "I am also a document", authorId: 2 },
  3: { content: "You guessed it!", authorId: 2 }
}
const authors = {
  1: { name: "Adam" },
  2: { name: "Dave" }
}

// with error handling
function getDocument(documentId, callback) {
  function loadComplete() {
    callback(documents[documentId])
  }
  setTimeout(loadComplete, 100)
}

// with error handling
function getAuthor(authorId, callback) {
  function loadComplete() {
    callback(authors[authorId])
  }
  setTimeout(loadComplete, 100)
}

// getDocument(2, (error, document) => {
//   if (error === null) {
//     getAuthor(document.authorId, (author) => {
//       console.log(author.name)
//     })
//   } else {
//     console.log(error)
//   }
// })


// Handle errors with Promises

function getAuthorPromise(authorId) {
  const author = new Promise((resolve) => {
    getAuthor(authorId, resolve)
  })

  return author
}

// getAuthorPromise(1)
//   .then(author => {
//     console.log('Hoorray!')
//     console.log(author)
//   })

// Create promise for getDocument
function getDocumentPromise(documentId) {
  const document = new Promise((resolve) => {
    getDocument(documentId, resolve)
  })
  return document
}

getDocumentPromise(1)
.then(document => console.log(document.content))
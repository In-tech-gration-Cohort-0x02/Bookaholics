  
  async function searchBooks(queryString) {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryString}`);
      const data = await response.json();
  
      for (let i = 0; i < Math.min(10, data.items.length); i++) {
        const book = data.items[i].volumeInfo;

        
        const img = book.imageLinks.thumbnail;
        const authors = book.authors;
        const title = book.title;
        const description = getShortDesc(book.description, 10); //get first 10 words

        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML += `
            <div class="book-card">
              <img src="${img}" >
            <div class="book-info">
              <h2 class="book-author">${authors ? authors : "Unknown author"}</h2>
              <h3 class="book-title">${title ? title : "Unknown title"}</h3>
              <p class="book-description">${description ? description + `<a href="/">...read more</a>` : "Description unavailable"}</div>
        `
      }
    } catch (err) {
      console.error( err);
    }
  }

function getShortDesc(description, wordCount) {
  if (typeof description === 'string') {
    const words = description.split(" ");
    const shortWords = words.slice(0, wordCount);
    return shortWords.join(" ");
  } else {
    return 'No description available';
  }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("#form");
    const $icon = document.querySelector(".search-icon");
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.querySelector(".card-container").innerHTML = "" 
        const queryInput = document.querySelector('#search');
        const queryString = queryInput.value;
        searchBooks(queryString);
    });
    $icon.addEventListener('click',(e) => {
      e.preventDefault();
        document.querySelector(".card-container").innerHTML = "" 
        const queryInput = document.querySelector('#search');
        const queryString = queryInput.value;
        searchBooks(queryString);
    })
  })


  



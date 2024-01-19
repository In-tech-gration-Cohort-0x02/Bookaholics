// navbar menu

// search bar
async function searchBooks(queryString) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${queryString}`
    );
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
              <h2 class="book-author">${
                authors ? authors : "Unknown author"
              }</h2>
              <h3 class="book-title">${title ? title : "Unknown title"}</h3>
              <p class="book-description">${
                description
                  ? description + `<a href="/">...read more</a>`
                  : "Description unavailable"
              }</div>
        `;
    }
  } catch (err) {
    console.error(err);
  }
}

function getShortDesc(description, wordCount) {
  if (typeof description === "string") {
    const words = description.split(" ");
    const shortWords = words.slice(0, wordCount);
    return shortWords.join(" ");
  } else {
    return "No description available";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("#form");
  const $icon = document.querySelector(".search-icon");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".card-container").innerHTML = "";
    const queryInput = document.querySelector("#search");
    const queryString = queryInput.value;
    searchBooks(queryString);
  });
  $icon.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".card-container").innerHTML = "";
    const queryInput = document.querySelector("#search");
    const queryString = queryInput.value;
    searchBooks(queryString);
  });
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function toggleWithDelay() {
  setTimeout(() => {
    menu.classList.toggle("bx-x");
  }, 200);
}

menu.onclick = () => {
  toggleWithDelay();
  navbar.classList.toggle("open");
};

//** contributors section */

/** ### async func get list contributors for repo from github */
const getContributors = async (repoName) => {
  let request;
  try {
    request = await fetch(
      `https://api.github.com/repos/${repoName}/contributors`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(err);
  }

  const contributorsList = await request.json();
  console.log(contributorsList);
  return contributorsList;
};

/** ### async func get user from github */
const getGitUser = async (gitName) => {
  let request;
  try {
    request = await fetch(
      `https://api.github.com/users/${gitName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(err);
  }

  const contributorsList = await request.json();
  console.log(contributorsList);
  return contributorsList;
};

//** ### fill template with contributor data */
const addArticleGitContributors = (contributor) => {
  const articleTemplate = `
<article>
    <div>
        <div class="division">In<span>tech</span>gration</div>
        <a class="fullname" href='${contributor.html_url}'>${contributor.login}</a>
        <ul>
            <li>Expert bookaholic</li>
        </ul>
    </div>
    
    <img src="${contributor.avatar_url}" alt="users avatar ${contributor.login} ">
</article>
`;
  return articleTemplate;
};

//** ### async func get contributors from repo*/
const appendGitContributors = async () => {
  //get list contributors for repo from github api
  const repoName = "In-tech-gration-Cohort-0x02/Bookaholics";
  const result = await getContributors(repoName);

  const sectionContributors = document.querySelector("#contributors");

  //collect all articles
  let allArticles = "";
  result.forEach((element) => {
    allArticles += addArticleGitContributors(element);
  });

  allArticles += addArticleGitContributors(await getGitUser('Amlima1'));
  allArticles += addArticleGitContributors(await getGitUser('Behsolo'));

  sectionContributors.innerHTML = allArticles;
};

appendGitContributors();

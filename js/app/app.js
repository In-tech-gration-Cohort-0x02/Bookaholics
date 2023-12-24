function searchBooks (queryString) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=10&q=${queryString}`)
        .then((res)=>res.json()) 
        .then((res)=>res.json()) 

 
}

document.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("#form"); 
    $form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const queryInput = document.querySelector('#query');
        console.log(queryInput.value);
        const queryString = queryInput.value;
    });
})


//** contributors section */

/** ### async func get list contributors for repo from github */
const getContributors = async (repoName) => {  
    let request = await fetch(`https://api.github.com/repos/${repoName}/contributors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let contributorsList = await request.json();
    console.log(contributorsList);
    return contributorsList;
}

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
}

//** ### async func get contributors from repo*/
const appendGitContributors = async () => {

    //get list contributors for repo from github api
    const repoName = 'In-tech-gration-Cohort-0x02/Bookaholics';
    const result = await getContributors(repoName);

    const sectionContributors = document.querySelector('#contributors');

    //collect all articles
    let allArticles = '';
    result.forEach(element => {
        allArticles += addArticleGitContributors(element);
    });

    sectionContributors.innerHTML = allArticles;
}

appendGitContributors();





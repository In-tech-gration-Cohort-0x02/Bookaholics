# Bookaholics

## Cloning Repo

- Clone our repo from [this link](https://github.com/In-tech-gration-Cohort-0x02/Bookaholics.git)

### Running the project in development mode  

- `cd Bookaholics`

## Tasks

Assign yourself to that task by clicking on "Assignees" and adding your GitHub username if you decide to work on some task

- Go to issue you were assigned
- On Right Side go to `Projects` ==> under ***Book Project*** turn your task from ***Todo*** to **In Progress** and **Review**
- always update your task in [here](https://github.com/orgs/In-tech-gration-Cohort-0x02/projects/2)  

### Branching  

- we will be using branches for every feature/issue and component  
- Create a new branch for your changes: `git checkout -b feature-name` (eg `component-footer`, `feature-search-bar`)
- use descriptive name related to feature/component you are going to add(please try not to use ~~your name~~ and ~~x~~ and ~~y~~)
  - you can also make branch in by going to issue which you want to work on right panel `Development` ==> `create a branch`
- make changes in your branch
- Commit and push your changes
- create a pull request and and assign to team to review before merging  
TIP: if you want you can use prefix eg "CSS" or "JS" for branch naming and in your commits also

## Folder Structure

  ```md
  ├── 📄index.html 
  ├── 📰README.md
  ├── 📰CONTRIBUTING.md
  ├── 📰package.json
  ├── 📂js
       ├── 📂app
          ├── 📄app.js (Main application file where all modules are imported)
      └── 📂lib
          ├── demo.js
  ├── 📂css
      └── 📂lib
      ├── 📂styles 
          ├── 📄style.css (Global CSS File)
          ├── 📄root.css (for all css variables)
  └── 📂 assets
      ├── 🖼️images.jpg
      ├── 🖼️image.jpg
      
  ```

### Javascript

- All JavaScript code is written inside "js" folder, which further divided into two folders:
  - "app" for small functionalities like fetching data and displaying data eg `book-template.js`
    - you can create any js file in this folder
  - "lib" folder for all the code we use for codrope demos

### CSS

- All Css Files goes in CSS folder which further divided into two folders:
  - "lib": for all codrope style sheets
  - "styles": for general global styling of the app
    - root css will holds all our variables for colors (background, font), typography etc
    - you can create file related to your task in this folder
- make sure to use only class and id
- Try to use ids or combination of selectors so we won't mix our styles
- If you decide to use classes use prefix of your task which you are working on eg  `footer-link` `nav-search-button`
- Avoid tag name like `main` or `section` or `h1` or `p` this can mix your styles with other styling
- Avoid Inline Styling

### HTML

- make sure to install and use [W3C Web Validator](https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator) VSCode Extension help you to validate your Html file
- use Semantic html like  `section` `article` tags for content
- avoid generic html and use `div` and `span` only for styling purposes

### Assets

- Assets includes images that used on pages.
- Always make sure to use [TINYpng](https://tinypng.com/) to compress the size of your images before you push it

### Merging Pull Request

- Always try to pull changes and review them locally
- If you find any issue/typo ask for changes in pull request before you merge it

### Happy Coding

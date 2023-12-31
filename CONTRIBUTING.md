# Bookaholics

## Cloning Repo

- Clone our repo from [this link](https://github.com/In-tech-gration-Cohort-0x02/Bookaholics.git)

### Running the project in development mode  

- `cd Bookaholics`
- Run `npm install`  to install all dependencies

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
  ├── 📰.eslintrc.js
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
- Avoid tag name like `main`, `section` , `h1` , `p` , `header` and `footer` for styling this can mix your styles with other styling or you can use combination of selectors `.parent p + p` or `.parent p ~ p`
- Avoid Inline Styling

### HTML

- make sure to install and use [W3C Web Validator](https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator) VSCode Extension help you to validate your Html file
- use Semantic html like  `section` `article` tags for content
- avoid generic html and use `div` and `span` only for styling purposes

### Assets

- Assets includes images that used on pages.
- Always make sure to use [TINYpng](https://tinypng.com/) to compress the size of your images before you push it

### Eslint

- Eslint configuration file  `.eslintrc.js`.
- You will find some following [rules](https://eslint.org/docs/latest/rules/) for this project
  - `indent: ["error", 2]`,  Use 2 spaces for indentation
  - `quotes: ["error", "single"]`,  Use single quotes for strings in js
  - `semi: ["error", "always"]`, Require semicolons at the end of statements
  - `"no-console": "warn"`, Disallow the use of console (warn instead of error)
  - `"no-unused-vars": error"`,  Disallow unused variables
  - `eqeqeq: "error"`,  Require strict equality (===)
  - `"no-var":"error"`,  Enforce the no-var rule `var` is not allowed
- you can run `npm lint` or `npx eslint js/app/app.js`
- Also make sure to install [EsLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to see your errors in run time
- run `lint-fix` or `npx eslint js/app/app.js --fix` to fix some errors/warnings automatically or  fix manually 


### Merging Pull Request

- Always try to pull changes and review them locally
- If you find any issue/typo ask for changes in pull request before you merge it

### Happy Coding

# Bookaholics

## Cloning Repo

- Clone our repo from [this link](https://github.com/In-tech-gration-Cohort-0x02/Bookaholics.git)

### Running the project in development mode  

- `cd Bookaholics`

### Branching  

- we will be using branching for every feature and component  
- Create a new branch for your changes: `git checkout -b feature-name` (eg `component-footer`, `feature-search-bar`)
- use descriptive name related to feature/component you are going to add(please try not to use ~~your name~~ and ~~x~~ and ~~y~~)
- make changes in your branch
- Commit and push your changes and assign to team to review before merging
TIP: if you want you can use prefix eg "CSS" or "JS" for branch naming and in your commits also

## Folder Structure

  ```md
  ├── 📁index.html 
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

## Javascript

- All JavaScript code is written inside "js" folder, which further divided into two folders:
  - "app" for small functionalities like fetching data and displaying data eg `book-template.js`
    - you can create any js file in this folder
  - "lib" folder for all the code we use for codrope demos

## CSS

- All Css Files goes in CSS folder which further divided into two folders:
  - "lib": for all codrope style sheets
  - "styles": for general global styling of the app
    - root css will holds all our variables for colors (background, font), typography etc
    - you can create file related to your task in this folder
- make sure to use only class and id
- Try to use ids or combination of selectors so we won't mix our styles
- If you decide to use classes use prefix of your task which you are working on eg  `footer-link` `nav-search-button`
- Avoid tag name like main or section or h1 or p this can mix your styles with other styling or you can also use inline styling in your elements

## HTML

- use Semantic html like  `section` `article` tags for content
- avoid generic html and use `div` and `span` only for styling purposes

## ASSEts

- Assets includes images that used on pages.

Happy coding

# {📚😊} Bookaholics

A book search website that allows you to find books of your interest. You can search by title, author, genre, or keyword and get a list of matching books with their details. ☀️



**Features 🚀📘**

🔍 Easy and fast book search.

📖 Detailed book information such as thumbnail, author, publisher, publish date, number of pages, and ISBN.

📱 User-friendly and responsive design that adapts to different devices and screen sizes.

🌐 Collection of data from Google Books API to ensure an extensive and up-to-date catalog.



**Additional Book Details 📖🔍**

```diff
- Categories: Specify the genres or categories that the book belongs to.

+ PDF Link for Preview: Provide a link for users to preview the book in PDF format.

! Country of Origin: Mention the country where the book originated.

# Book Introduction: Include a brief introduction or summary of the book.

@@ Book Subtitle: If applicable, provide the subtitle of the book.@@

- ETag and ID: Include unique identifiers for the book.

+ Book Reader Link: Offer a link that directs users to a Google Reader where they can read the book.
```


**Technologies Used 🛠️**

- ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `#f03c15`
- ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `#c5f015`
- ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `#1589F0`

- CSS and JavaScript components from  [Codrops](https://github.com/codrops/BookPreview?tab=readme-ov-file).
(Please star ✨ [this](https://github.com/codrops/BookBlock) repo)

- BookPreview for a visually appealing and interactive user experience.

- Custom CSS and JavaScript enhancements to tailor the user interface and functionality to the unique offerings of Bookaholics.



**License 📄✅**

Bookaholics is licensed under the MIT License. See LICENSE file for more details. 🤓✨




**ESLint configuration**

- The ESLint configuration is typically used by development tools and linters during the development process and doesn't need to be included in the actual runtime of your web application.

- To enable ESLint checking in your JavaScript file, you need to include a special comment at the top of the file that points to your ESLint configuration. This comment is called a "shebang" or "directive comment."




**example**

/* eslint-env browser */
/* eslint-disable quotes */

#eslintrc.json

{
  "env": {
    "browser": true,
    "es2022": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "error",
    "eqeqeq": "error",
    "no-var": "error"
  }
}


**eslintrc.js**

module.exports = {

  env: {

    browser: true,

    es2022: true,

  },

  extends: "eslint:recommended",

  parserOptions: {

    ecmaVersion: 2022,

    sourceType: "module",

  },

  rules: {

    indent: ["error", 2],

    quotes: ["error", "single"],

    semi: ["error", "always"],

    "no-console": "warn",

    "no-unused-vars": "error",

    eqeqeq: "error",

    "no-var": "error",

  },

};


**export**  
**statement used in Javascript modules to export functions, objects, or primitive values from one module so that they can be used in other programs (using the ‘import’ statement).**


**Module exports**
**the instructions that tell JavaScript which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.**

**ECMAScript Modules (ESM)**
**specification for using Modules in the Web. It's supported by all modern browsers and the recommended way of writing modular code for the Web.**

If you want to use the import statement in a JavaScript file to import an ESLint configuration that is written as a module, you need to use ECMAScript Modules (ESM).



**When ESLint runs, it looks for configuration files in the following order:**

.eslintrc.js

.eslintrc.cjs

.eslintrc.yaml

.eslintrc.yml

.eslintrc.json

If you have both .eslintrc.js and .eslintrc.json in your project, ESLint will prioritize the JavaScript configuration.


**env:**

Specifies the environments in which your code is intended to run.
configured for 
- a browser environment  
- ECMAScript 2022 (es2022).

**extends:**

Uses the "eslint:recommended" configuration as a base. This includes a set of recommended rules by ESLint.

**parserOptions:**

Configures options for the parser. It sets the ECMAScript version to 2022 and specifies the source type as "module," indicating the use of ECMAScript modules.

**rules:**

Defines specific ESLint rules and their configurations:

- indent 
Requires 2 spaces for indentation.

- quotes: 
Requires the use of single quotes for strings.

- semi: 
Requires semicolons at the end of statements.

- no-console: 
Warns (instead of errors) when the console statement is used.

- no-unused-vars: 
Throws an error for unused variables.

- eqeqeq: 
Requires strict equality (===) instead of loose equality (==).

- no-var: 
Enforces the use of let or const instead of var.


**package.json**

{

  "name": "Bookaholics",

  "version": "1.0.0",

  "description": "An App for bookaholics by bookaholics ",

  "main": "app.js",

  "repository": "https://github.com/In-tech-gration-Cohort-0x02/Bookaholics.git",

  "author": "In-tech-gration Cohort 0x02",

  "license": "MIT",

  "scripts": {

    "lint": "eslint ."

  },

  "devDependencies": {

    "eslint": "^8.56.0"

  }

}



**Insights about the settings**

- name:

name of the package or project.
"Bookaholics".

- version:

version of the package. 
"1.0.0."

- description:

short description of the package. 
"An App for bookaholics by bookaholics."

- main:

Entry point of the application. 
"app.js." 
This is the file that will be executed when someone imports or runs the package.

- repository:

Version control repository where the source code is hosted. 
Hosted on GitHub at the specified URL.

- author:

Author(s) of the package. 
"In-tech-gration Cohort 0x02."

- license:

Licensing information for the package.
MIT License.

- scripts:

npm scripts that can be executed using the npm run command. 
"lint," which runs ESLint on the project.

- devDependencies:

Dependencies that are only needed during development, not in production. 
Included ESLint as a development dependency. Version is specified.
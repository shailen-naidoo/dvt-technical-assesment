# DVT Tech Challenge
This challenge is part of the hiring process at DVT for frontend developer roles. The objective is to produce this without investing any more time than necessary. As such, we'd like to see your regular conventions when writing an application.

## Why are we asking you to do this?
At DVT, we try to set our standards high. We would love for strong candidates to join our team and help us aim to be the best. This challenge is to help us understand your proficiency over a number of facets of development, which we value.

Some of these are
- Good commit & branching conventions
- Handling of network requests
- Typescript
- Routing
- State management
- Framework (Angular or React) conventions
- Semantic HTML
- CSS and general ability to produce a polished end result  - responsiveness is low priority, but appreciated

## What do you need to produce?
We're asking you to build a basic storefront using [[https://fakestoreapi](https://fakestoreapi.com/)](Fake Store API)

We would like for you to get all products and display them as cards on a page, with the ability to add items to a cart.

There is a _lot_ of room to go above the expected outcome, and please feel free to tackle something that is relevant to your current level (this would be optional)

_Some_ examples of this would be 
- Using a global state manager in an efficient way
- Multiple routes
- Great visuals

## Some additional notes
- Please be considerate of what dependencies and build tools you are using
- If you opt to use any @ts-ignores or similar, please leave a comment with an explanation
- Feel free to leave comments/notes in your readme.md

## Submission
Please use this repo as your submission as a finalised pull request and notify us when you are complete.

---

Dear reviewer, thank you for taking the time to review my work, it is greatly appreciated. Please find the setup documentation below. I believe that it may be more important to read through this document [Challenge Vue Storefront - Shailen Naidoo](https://docs.google.com/document/d/1Hv22wkMj1MkiT8FXwB1DfKEBZPdzibTJWpEgKriOnEg/edit?usp=sharing) first before attempting to go through the application set up and code.

1. Please clone this repository from GitHub on your local machine
2. I am making the assumption that you have Node.js installed on your machine and [NVM](https://github.com/nvm-sh/nvm).
3. You will need to source the `dev.sh` in your terminal and run the command `install_dependencies` or alternatively if you are not a big fan of shell scripts you can run `npm install` instead.
4. There are several commands made available to you in the `package.json` file such as `npm run dev`, `npm run test:unit` which is very important for the general development of the project.
5. If you do not mind shell commands I have abstracted those commands away into shell commands such as `run_application` and `run_unit_tests`.
6. I am going to assume that you love shell commands and so that is what I will use for now. You can run the command `run_unit_tests§` and you will notice that the test framework will boot up and run the test files and they all should pass.
7. You can then run the `run_application` command and this will boot up the application, you can visit the URL that is logged to the terminal and you will see the application live in your browser.
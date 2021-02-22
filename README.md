# Project 3: Sour Grapes (Client)
Sour Grapes is a web app for wine lovers! Review and keep track of wines you've tried and never forget tasting notes again!

## Front End repo & Deployed Links:
[Front End Repo](https://github.com/NSurawski/Sour-Grapes-Client "Front End Repo")
[Front End Deployed](https://nsurawski.github.io/Sour-Grapes-Client/#/ "Front End Deployed")

## Back End Repo & Deployed Links:
[Back End Repo](https://github.com/NSurawski/Sour-Grapes-API "Back End Repo")
[Back End Deployed](https://radiant-ocean-35156.herokuapp.com/ "Back End Deployed")

## Set Up & Installation:
1. Fork and clone this repository
2. Checkout to a new branch
3. Run `npm install` to install dependencies
4. Start server with `npm start`

## Other Important Links & Resources Used:
[React CRUD Lesson](https://git.generalassemb.ly/ga-wdi-boston/react-crud/tree/winter/training "React-crud Lesson")

## Wireframes
[Wireframes](https://imgur.com/0uxw3Ww "Wireframes")

## Screenshot of Web App:
<img width="1440" alt="Sour-Grapes-App" src="https://user-images.githubusercontent.com/64649258/108749065-566de780-750d-11eb-944e-c4471dfa11bf.png">

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- I started by brainatorming and coming up with my project idea. I decided on a place for wine lovers to rate and review wines and keep track of ones theyve tried. Next, I created an ERD to show the relationship between our resources (the user, and wines). Next, I drew up a wireframe to plan out how the UI would appear to the user. I then wrote user stories to layout the functionality I wanted to create for the user experience.

### CRUD Wines:
I went trhough methodically and added each CRUD action one by one, starting with Create, then my two Show components, and lastly my Update and Delete actions. For each CRUD action, I went through and created the component, added the route to App.js, and made sure to add my axios calls in api/wines.js. One by one, as each CRUD action was added, I began to test. Once testing and troubleshooting an individual component was complete and functioning properly, I made sure to commit my work.

### Problem-Solving:
-Troubleshooting 'Update': I had a few bugs with my update component that I had to troubleshoot to fix. First, My url path on my app was going to 'wines/undefined' because I was directing it to 'id' instead of '_id' and I had not defined 'id'. Next, I updated 'wine' to be 'wines' in my this.setState on my 'ShowUserWines' component. These 2 changes fixed my Update bug, to make it work properly.

-Troubleshooting 'Delete': I had intially created a seperate component for delete, but ended up getting rid of it and writing my code for the 'delete' feature inside of my IndexUserReviews class component. I put my success and failure messages inside of my handleDelete function and passed in 'id'. Inside of my render, I was initially trying to redirect to the 'dalete-wine' path, but I should have been redirecting the user back to an index page to show all wines after one has been deleted.

## User Stories:
-As a user, I want to be able to sign up
-As a user, I want to be able to sign in
-As a user, I want to be able to change my password
-As a user, I want to be able to sign out
-As a user, I want to be able to view all of my wines
-As a user, I want to be able to view a single wine entry
-As a user, I want to be able to create a new wine entry
-As a user, I want to be able to edit a wine entry
-As a user, I want to be able to delete a wine entry
-As a user, I want to be able to view all wine entries, even if they aren't mine

## Technologies Used:
- HTML/CSS
- Bootstrap
- Javascript
- React
- Axios
- Github Pages

## Unsolved Problems
- I would like for my page to redirect user to 'Show user wines' once wine review has been created
## Unsolved Problems:

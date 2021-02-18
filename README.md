# Project 3: Sour Grapes (Client)

## Other Important Links & Resources Used:

## Planning and Story: Development Process and Problem-Solving Strategy:
### Planning:

- I started by brainatorming and coming up with my project idea. I decided on a place for wine lovers to rate and review wines theyve tried. Next, I created an ERD to show the relationship between our resources (the user, and wines). Next, I drew up a wireframe to plan out how the UI would appear to the user. I wrote user stories to layout the functionality I wanted to create for the user experience.

### CRUD Wines:
- As a team, we started with our create post action together, then show one post since we would need this functionality before other CRUD actions. At this point, we split up into 2 groups and utilized peer programming to complete the other actions. With our comment resource, since it is a sub-document, we completed the 3 comment actions together since they were more complex than post.
### Problem-Solving:
- We were having issues with the asynchronous flow of the code when creating/updating/deleting comments. The ShowPost page (where comments live) was re-rendering before we recieved the API response. We ended up having to use the async/await syntax to make our code pattern synchronous allowing the re-render function to use the response from the API.
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

## Unsolved Problems:

## Wireframes
![Wireframes](https://imgur.com/0uxw3Ww "Wireframes")

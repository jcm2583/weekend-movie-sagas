# Weekend Movie Sagas

## Description

_Duration: Weekend Challenge_

I created an application that allows the user to view a gallery of movie posters that will show additional information about that movie when clicked on. The user also has the ability to add movies of their choosing that will then show on the home page gallery. 

## Screen Shot

![Home Page](/public/images/feedback1.png)
![Feeling Page](/public/images/feedback2.png)
![Understanding Page](/public/images/feedback3.png)
![Support Page](/public/images/feedback4.png)
![Comments Page](/public/images/feedback5.png)
![Review Page](/public/images/feedback6.png)
![Submit Page](/public/images/feedback7.png)

### Prerequisites

- Node.js
- Postico
- PostgreSQL

## Installation

1. Fork and clone the project from Github
2. Open in text editor of your choice
3. Create a database named `saga_movies_weekend`. This project was built using Postico
4. The database.sql file contains the neccessary information to set up and populate the new tables
5. Run `npm install` to initialize the neccessary packages
6. Run `npm run server` in your terminal
7. Run `npm run client` in your terminal
8. The `npm run client` command will open up a new browser tab for you
9. When you are finished, type `control + C` to stop server and client

## Usage

1. Upon page load, a gallery of movie titles and posters greet the viewer
2. The user can click on a movie poster which will then take the user to a details page that provides more information about that movie
3. On the details page, the user can read a description of the film, including the genre type
4. When finished, there is a back button that will take the user back to the homepage where they can click on another movie to see another description
5. If the user wants to add their own movie, there is a button on the home page that will allow the user to add a movie of his or her choosing
6. On the submit page, the user can add a movie title, a url link to a photo, a description, and choose a genre from a drop down menu
6. Upon submitting, the user will be redirected back to the home page where they will now also see the movie that they just added

## Built With

- React
- Redux
- Redux-Saga
- Axios
- Javascript
- PostgreSQL
- Node.js
- Material-UI
- HTML
- CSS

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equiped and helped me make this application a reality.

## Support
If you have suggestions or issues, please email me at [jmotes2583@gmail.com](www.google.com)
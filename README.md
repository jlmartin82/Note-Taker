# Note Taker

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Note Taker is an application that allows users to write and save notes. It provides an easy way to organize thoughts and keep track of tasks. The application uses an Express.js back end and saves and retrieves note data from a JSON file.

The front end of the application has already been created. This project focuses on building the back end, connecting it to the front end, and deploying the entire application to Heroku.

## User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Mock-Up

The following images show the web application's appearance and functionality:

![landingpage](<Landing page 2023-07-08 at 8.12.20 AM.png>)

![NotesPage](<Notespage 2023-07-08 at 8.11.36 AM.png>)

[walkthrough](<../../../Desktop/NoteTaker_ Jul 8, 2023 9_28 AM.webm>)

Walkthrough 
[NoteTaker_ Jul 8, 2023 9_28 AM.webm](https://github.com/jlmartin82/Note-Taker/assets/129562637/2a4a3ec5-6401-49a8-9c58-041c61c84fd3)


## Getting Started

To run the Note Taker application locally, follow these steps:

1. Clone the repository and navigate to the project's root directory.
2. Install the required dependencies by running the following command:
    npm install


3. Start the application by running the following command:
    node server.js


4. Open your web browser and visit `http://localhost:3002` to access the application.

## Technologies Used

- Express.js
- Node.js
- JSON
- HTML
- CSS

## API Routes

The following API routes have been created:

- `GET /api/notes` - Reads the `db.json` file and returns all saved notes as JSON.
- `POST /api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and returns the new note to the client.

## HTML Routes

The following HTML routes have been created:

- `GET /notes` - Returns the `notes.html` file.
- `GET *` - Returns the `index.html` file.

## Deployment

The Note Taker application has been deployed to Heroku. You can access it using the following link: [Note Taker App](https://lit-earth-64051-15b19a2b18f4.herokuapp.com)

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## Questions

If you have any questions, please feel free to contact the project maintainers:


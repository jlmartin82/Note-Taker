const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use(express.static('public'));


app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/api/notes', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to read notes data.' });
    } else {
      const notes = JSON.parse(data);
      res.json(notes);
    }
  });
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to read notes data.' });
    } else {
      const notes = JSON.parse(data);
      note.id = generateUniqueId(); 
      notes.push(note);
      fs.writeFile('db.json', JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Unable to save the note.' });
        } else {
          res.json(note);
        }
      });
    }
  });
});

function generateUniqueId() {
    return uuidv4();
  }
  

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

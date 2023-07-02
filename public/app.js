const express = require('express');
const fs = require('fs');

const app = express();

app.get('/notes', (req,res) =>{
    const notes = fs.readFileSync('./db.json', 'utf8');
    res.setEncoding(note);
});

app.post('/api/notes', (req, res) => {
    const note = req.body;
    const db = require('./db.json'); 
    const newNotes = [...db.notes, note]; 
    fs.writeFileSync('./db.json', JSON.stringify({ notes: newNotes }, null, 2)); 
    res.send(note);
  });
  
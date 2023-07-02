const express = require('express');
const fs = require('fs');

const app = express();

app.get('/notes', (req,res =>{
    const notes = fs.readFileSync('./db.json', 'utf8');
    res.setEncoding(note);
}))
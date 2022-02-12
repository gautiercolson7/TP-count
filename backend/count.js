import React from 'react'

const express = require('express')
const app = express()
const session = require('express-session');
const PORT = 4000;

app.use(
    session({
        secret: 'mysecret',
        resave: false,
        saveUninitialized: false
    })
);

app.get('/', function(req, res){
    console.log('server started')
    if(!req.session.pageCountByCurrentUser)
        req.session.pageCountByCurrentUser = 0;
    req.session.pageCountByCurrentUser++;
    res.send({
        pageCount: req.session.pageCountByCurrentUser
    });
});

app.listen(PORT, () => {
    console.log('Serveur demarré')
})
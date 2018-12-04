const express = require('express');
const User = require('../models/user');

const app = new express();

app.get('/user', function (req, res) {
    res.json('get user');
})

app.post('/user', function (req, res) {
    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role
    });

    user.save( (err, userdb) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userdb
        });
    } );
})

app.put('/user/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/user', function (req, res) {
    res.json('delete user')
})

module.exports = app;
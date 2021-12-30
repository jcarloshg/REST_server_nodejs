const { response } = require('express');
const { request } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nombre = "NO NAME", apikey } = req.query;

    res.json({
        msg: "get api- into controller",
        q,
        nombre,
        apikey
    });
};

const userPut = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: "put api - into controller",
        id
    });
};


const userPost = (req, res = response) => {

    const { nombre, edad } = req.body;


    res.json({
        msg: "post api - into controller",
        nombre,
        edad,
    });
};

const userDelelte = (req, res = response) => {
    res.json({
        msg: "delelte api - into controller"
    });
};

const userPatch = (req, res = response) => {
    res.json({
        msg: "userPatch api - into controller"
    });
};


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelelte,
    userPatch,
};
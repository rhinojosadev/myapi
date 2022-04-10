const express = require('express');
const request = require('request');
const Response = require('../utils/response');
const router = new express.Router();

router.get('/myapi',  (req, res) => {
    try {
        const response = new Response(null, 'Hello World', null);
        res.status(201).send(response.getResponse());
    } catch (e) {
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(400).send(response.getResponse());
    }
});

router.get('/myapi/pokemon/:name',  async (req, res) => {
    try {
        const uri = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;

        request(uri, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const response = new Response(null, body, null);
                res.status(201).send(response.getResponse());
            } else {
                const response = new Response(null, 'error', 'No pokemon found');
                res.status(400).send(response.getResponse()); 
            }
        });
    } catch (e) {
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(400).send(response.getResponse());
    }
});


module.exports = router;
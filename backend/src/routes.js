const express = require('express');
const routes = express.Router();
const ControllerDev = require('./controller/controllerDev');
const ControllerLikes = require('./controller/controllerLikes');
const ControllerDislikes = require('./controller/controllerDislikes');


routes.get('/devs', ControllerDev.index),
routes.post('/devs', ControllerDev.store),
routes.post('/devs/:devId/likes', ControllerLikes.store),
routes.post('/devs/:devId/dislikes', ControllerDislikes.store),


module.exports = routes

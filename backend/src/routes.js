const express = require('express');
const routes = express();
const ControllerDev = require('./controller/controllerDev');
const ControllerLikes = require('./controller/controllerLikes');
const ControllerDislikes = require('./controller/controllerDislikes');


routes.get('/devs', ControllerDev.index);
routes.post('/devs', ControllerDev.store),
routes.post('/devs/:devsId/likes', ControllerLikes.store),
routes.post('/devs/:devsId/dislikes', ControllerDislikes.store),


module.exports = routes

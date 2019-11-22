const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const usuariosConec = {}

//https://developer.github.com/v3/
app.use(function (req, res, next) {
     req.header("Access-Control-Allow-Origin", "http://localhost:3000")
     res.header("Access-Control-Allow-Origin", "http://localhost:3333");
     res.header("Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Credentials', true");
     res.header("GET, POST, OPTIONS")
     next();
});
io.on('conexao', socket => {
     const { user } = socket.handshake.query;
     usuariosConec[user] = socket.id;
});
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
mongoose.connect('mongodb+srv://eva:eva@cluster0-orybd.mongodb.net/Tindev?retryWrites=true&w=majority', {
     useUnifiedTopology: true
});
serverMongoose = express('mongodb+srv://eva:eva@cluster0-orybd.mongodb.net/Tindev?retryWrites=true&w=majority', {
     useNewUrlParser: true,
});
;
app.use((requisicao, respost, next) => {
     requisicao.io = io;
     requisicao.connectedUsers = connectedUsers;

     return next();
});
app.use(cors({ origin: 'http://localhost:3333' }));
serverMongoose.use(express.json());
serverMongoose.use(routes);
serverMongoose.listen(3333);

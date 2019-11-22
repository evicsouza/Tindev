const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const app = express('mongodb+srv://eva:eva@cluster0-orybd.mongodb.net/Tindev?retryWrites=true&w=majority');

//https://developer.github.com/v3/
app.use(function (req, res, next) {
     req.header("Access-Control-Allow-Origin", "http://localhost:3000")
     res.header("Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Credentials', true");
     res.header("GET, POST, OPTIONS")
     next();
});

mongoose.connect('mongodb+srv://eva:eva@cluster0-orybd.mongodb.net/Tindev?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
});
// app = express('mongodb+srv://eva:eva@cluster0-orybd.mongodb.net/Tindev?retryWrites=true&w=majority', {
//      useNewUrlParser: true,
// });
// ;

// app.use(cors({ origin: 'http://localhost:3333' }));
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

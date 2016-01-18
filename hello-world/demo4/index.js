require('bootstrap.min.css');

var component = require('./component');
import {es6Component} from './es6.js'

var app = document.createElement('div');
app.className = 'jumbotron';
app.appendChild(component());
document.body.appendChild(app);

var es6 = document.createElement('div');
es6.className = 'alert success';
es6.appendChild(es6Component());
document.body.appendChild(es6);

var component = require('./component');
//var es6Component = require('./es6');
import {es6Component} from './es6.js'

var app = document.createElement('div');
app.appendChild(component());
document.body.appendChild(app);

var es6 = document.createElement('div');
es6.appendChild(es6Component());
document.body.appendChild(es6);

const express = require('express')
const app = express()
app.use(express.static('public'))
const index_router = require('./routers/router_index')
const add_router = require('./routers/router_add')
const data_router = require('./routers/router_data')
const update_router = require('./routers/router_update')
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const port = process.env.PORT || 4000
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.set('view engine', 'ejs')

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Ahmad_RAQ:123raq@first.cqjf4wk.mongodb.net/?retryWrites=true&w=majority")
  .then(result => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })
  })
  .catch(err => {
    console.log(err);
  });

//classrooms

app.get('/', (req, res) => {
  res.render('fsool')
})

// index

app.use(index_router)

// add

app.use(add_router)

// data

app.use(data_router)

// update

app.use(update_router)

// 404
app.use((req, res) => {
  res.status(404).redirect('/');
});

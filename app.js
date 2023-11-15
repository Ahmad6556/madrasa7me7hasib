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
const jadual = require("./models/jadual")
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

// jadual

app.get('/jadual', (req, res) => {
  jadual.find()
    .then((result) => {
      res.render("jadual", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get('/jadual/:id', (req, res) => {
  jadual.findById(req.params.id)
    .then((result) => {
      res.render("jadual_Edit", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

app.post("/jadual", (req, res) => {
  jadual
    .create(req.body)
    .then( result => {
      res.redirect("/jadual");
    })
    .catch( err => {
      console.log(err);
    });
});

app.delete("/jadual/:id", (req, res) => {
  jadual.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/jadual")
    })
    .catch((err) => {
      console.log(err);
    });
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

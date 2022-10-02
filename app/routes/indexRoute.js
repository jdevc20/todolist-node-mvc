const express = require('express');
const router = express.Router();

// let items = []
// router.get('/', function (request, respond) {
//     let today = new Date();
//     let options = { weekday: "long", day: "numeric", month: "long" }
//     let day = today.toLocaleDateString("en-us", options)

//     let objectToPassed = { kindOfDay: day, newListItems: items }
//     respond.render("index", objectToPassed);
// })

const controller = require('../controllers/indexController')
router.get('/', controller.index)
router.post('/', controller.indexAddToDo)



module.exports = router;
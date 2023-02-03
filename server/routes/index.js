const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getAllSharks)
router.route('/:id').get(controllers.getAllTankShark).put(controllers.updateOneShark)

module.exports = router

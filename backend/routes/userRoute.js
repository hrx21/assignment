const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/', userController.add_user)
router.get('/get-single/:id', userController.get_single_user)
router.get('/', userController.get_all_user)
router.delete('/:id', userController.delete_user)
router.put('/:id', userController.update_user)

module.exports = router
const express = require('express')
const empController = require('../controllers/empController')

const router = express.Router()

router.post('/', empController.add_emp)
router.get('/', empController.get_all_emp)
router.get('/get-single/:id', empController.get_single_emp)
router.put('/:id', empController.update_emp)
router.delete('/:id', empController.delete_emp)

module.exports = router 
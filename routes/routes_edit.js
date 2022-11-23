const express = require('express');
const ctrlEdit = require('../controllers/ctrl_edit');

router = express.Router();


router.put('/:id', ctrlEdit.putEdit)

router.get('/:id', ctrlEdit.getEdit);


module.exports = router;
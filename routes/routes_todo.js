const express = require('express');
const ctrlTodo = require('../controllers/ctrl_todo');

router = express.Router();

router.get('/', ctrlTodo.getAccueil);

router.post('/ajouter', ctrlTodo.postAccueil );

router.delete('/supprimer/:id', ctrlTodo.delIndex);





module.exports = router;
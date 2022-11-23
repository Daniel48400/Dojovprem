const Todo = require("../models/Todo");

const getEdit = (req, res) =>{
    const { id } = req.params;
    Todo.findById(id, (err, todo) => {
        if(err) console.log(err);
          res.render('edit', {
            title: "Editer",
            todo: todo,
        });
    });
   
};

const putEdit = (req, res) =>{
    const { id } = req.params;
    const { todo } = req.body;
    console.log(id);
    Todo.findByIdAndUpdate(id,{ title: todo },(err) => {
        if(err) console.log(err);
        res.redirect('/');
    });
    
};


module.exports = {
    putEdit,
    getEdit,
};
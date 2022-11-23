const Todo = require("../models/Todo");

const getAccueil =(req, res) =>{
    Todo.find({},(err,todos) => {
        if(err) console.log(err);

            res.render('accueil', {
            title: "ToDoList",
            todos: todos,
        });
    });
   
};

const postAccueil =(req, res) =>{
    const newTodo = new Todo ({
        title: req.body.todo,

    });
    newTodo.save((err) => {
        if(err) console.log(err);
        res.redirect('/');
    });
    
};

const delIndex = (req, res) =>{
    const { id } = req.params;
    Todo.findByIdAndDelete(id,(err) =>{
        if(err) console.log(err);

    
        res.redirect('/');
    });
};



module.exports = {
    getAccueil,
    postAccueil,
    delIndex,
};
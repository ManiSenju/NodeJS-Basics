var Todos = require('../models/todomodel');

module.exports = function(app){
    app.get('/api/setUpTodos',function(req,res){

        // seed data

        var seedData = [
            {
                username: 'test1',
                todo:'Buy Milk',
                isDone:true,
                hasAttachment:false
            },
            {
                username: 'test2',
                todo:'Buy Food',
                isDone:true,
                hasAttachment:false
            },
            {
                username: 'test3',
                todo:'Buy Water',
                isDone:true,
                hasAttachment:false
            },
            {
                username: 'test4',
                todo:'Buy Passta',
                isDone:false,
                hasAttachment:false
            }
        ];
        Todos.create(seedData,function(err,results){
            res.send(results);

        })

    })
}
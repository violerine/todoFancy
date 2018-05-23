const toDo = require ("../models/todo")
const passport = require ("passport");

module.exports={
   
    getAllTask:(req,res,next)=>{
        toDo.find({})
        .then(task=>{
            res.send(task)
        })
        .catch(err=>{
            res.send(error)
        })
    },
    getTaskByUserId:(req,res,next)=>{
        toDo.find({userId:req.params.id})
        .then(todo=>{
            res.send(todo)
        })
        .catch(err=>{
            res.send(err)
        })
    },

    addNewTask:(req,res,next)=>{
        let newTask = new toDo({
            userId:req.body.userid,
            title:req.body.title,
            content:req.body.content
        })

        newTask.save((error,task)=>{
            if(error)res.status(500).send(error)
            else{
                toDo.find({})
                .then(task=>{
                    res.json(task)
                })
            }
        })
    },

    editTask:(req,res,next)=>{
        let updateTask = {
            title : req.body.title,
            content:req.body.content
        }
        //disini req.params.id nya harus ambil dr user yg logged in

        toDo.findByIdAndUpdate(req.params.id,updateTask,(err,result)=>{
            if(err) res.status(500).json(err)
            else{
                res.status(500).json({message : "Data updated"})
            }
        })
    },

    deleteTask:(req,res,next)=>{
        toDo.findByIdAndRemove(req.params.id,(err,result)=>{
            if(err) res.status(500).json(err)
            else{
                res.json({message : "task deleted"})
            }
        })
    }
}
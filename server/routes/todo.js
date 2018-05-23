const express = require('express');
const router = express.Router();
const {
getAllTask,
addNewTask,
editTask,
deleteTask,
getTaskByUserId
}=require('../controllers/todo-controller')

const {
    authenticate,
    authorize
}=require('../controllers/auth')


// router.get("/show",authenticate,getAllTask)
router.get("/",getAllTask)
router.get("/:id",getTaskByUserId)
router.post("/new",addNewTask)
router.put("/edit/:id",editTask)
router.delete("/delete/:id",deleteTask)

module.exports = router;

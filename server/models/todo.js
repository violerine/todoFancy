const mongoose = require ("mongoose")
const Schema = mongoose.Schema
var timestamps = require('mongoose-timestamp');


const toDoSchema = new Schema({
    userId: {type:Schema.Types.ObjectId, ref:'User'},
    title : String,
    content : String,
})

toDoSchema.plugin(timestamps)
mongoose.model('toDo',toDoSchema);

const toDo = mongoose.model('toDo',toDoSchema)

module.exports=toDo
import mongoose from "mongoose";


const NotesSchema = mongoose.Schema({
    title : {
        type : String ,
        required : true ,
        
    },
    description : {
        type : String ,
        required : true ,
        
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
   
    },
} , {timestamps : true});


const Notes = mongoose.model('Note' , NotesSchema);
export default Notes;
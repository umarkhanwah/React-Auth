import Notes from "../models/Notes.js";

export const AddNote = async (req , res)=>{
    const {title , description } = req.body;
    const userId = req.userId;

    let newNote = new Notes({
        title , description , user : userId
    })

    
    try {
        let Note = await newNote.save();
        res.status(200).json({message  : "Data Added Succesfully" , Note })
        
    } catch (error) {
        res.status(500).json({message : error.message})
        console.log(error);
            
    }    


}

export const showNotes = async (req , res)=>{
    const userId = req.userId;
    const allNotes = await Notes.find({user : userId});
    res.status(200).json({allNotes , message : "Data Fetched Succesfully"});
}
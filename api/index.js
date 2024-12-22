import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js'
import noteRoutes from './routes/notes.route.js'
import path from 'path';


dotenv.config();

const PORT  = 4000;
const app = express();
const __dirname = path.resolve();

mongoose.connect(process.env.MONGO ).then(
    ()=>console.log("Database Connected")
).catch((e)=>console.log(e.message))



// Working for hosting
app.use(express.static(path.join(__dirname , '/cleint/dist' , )))

app.get("*" , (req , res)=>{
    res.sendFile(path.join(__dirname ,'cleint'  ,'dist' , 'index.html' ))
});


app.use(express.json());

app.use('/api/notes' , noteRoutes);
app.use('/api/auth' , authRoutes);

app.listen(PORT , ()=>{
    console.log(`Port is Listening : ${PORT}`);
    
})


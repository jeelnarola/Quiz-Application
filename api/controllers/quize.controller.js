const Quize = require("../models/quize.Schema");

const CreateQuize = async(req,res)=>{
    try {
        let {title,description,questions} = req.body;

        if (!title || !description || !questions || questions.length === 0) {
            return res.status(400).json({ message: "All fields are required and questions must not be empty" });
        }
        let QuizeCreate = new Quize({
            title,description,questions
        })
        await QuizeCreate.save()
        res.status(201).json({ message: "Quiz added successfully", quiz: QuizeCreate });
    } catch (error) {
        console.log("Error in Create Quize Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

const QuizeById = async(req,res) =>{
    let {id} = req.params;
    try {
        let Data = await Quize.findById(id)

        if(!Data){
            return res.status(400).json({ message: "No Data Found..." });
        }
        res.status(201).json({success:true,Data:Data})
    } catch (error) {
        console.log("Error in QuizeById Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

const SubmitQuize = async(req,res)=>{
    try {
        const { quizId, answers,userID } = req.body;
    } catch (error) {
        console.log("Error in SubmitQuize Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}
module.exports = {CreateQuize,QuizeById}
import jobModel from "../models/jobModel.js"


//POST api to create job
export  const createjobController = async (req,res,next)=>{
    try{
        const {company,position}=req.body
        if(!company || !position){
            next('please provide the company details')
        }
        const newjob={
            company,
            position
            
        }
        const job= await jobModel.create(newjob)
        res.status(200).send({
            success:true,
            message:'job details added successfully',
            job

        })
    }catch(err){
        next('error in adding job')
    }
}

// getting all job details
export  const getAlljobController = async (req,res,next)=>{
    try{
        
        const jobs= await jobModel.find()
        res.status(200).send({
            success:true,
            jobs,
            totaljobs:jobs.length

        })
    }catch(err){
        next('error in getting job details')
    }
}

//Updating a job 
export  const updatejobController = async (req,res,next)=>{
    try{
        const {id} = req.params
        const {worklocation,position} =req.body

        if(!worklocation || !position){
            next('please provide the details')
        }

        const job=await jobModel.findOne({_id:id})
        if(!job){
            next(`No job found with this id ${id}`)
        }

        const updatejob=await jobModel.findByIdAndUpdate({_id:id},{
            worklocation:worklocation,
            position:position
        })

        res.status(200).json({
            success:true,
            message:"job details updated successfully",
            updatejob

        })
    }catch(err){
        next('error in updating job details')
    }
}

//Deleting a job info
export  const deletejobController = async (req,res,next)=>{
    try{
        const {id} = req.params

        const job=await jobModel.findOne({_id:id})
        if(!job){
            next(`No job found with this id ${id}`)
        }

        await jobModel.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"job info deleted successfully"

        })
        
    }catch(err){
        next('error in deleting job details')
    }
}
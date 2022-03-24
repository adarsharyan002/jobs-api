





const getAllJobs=async (req,res)=>{
    res.send('getAllJobs');
}
const getJob=async (req,res)=>{
    res.send('getJob')
}

const createJob=async(req,res)=>{
    res.send('createJob')
}

const deleteJob=async(req,res)=>{
    res.send('deleteJob')
}

const updateJob=async(req,res)=>{
    res.send('updateJob')
}

module.exports={
   getAllJobs,
   createJob,
   deleteJob,
   updateJob,
   getJob
}
import express from 'express';
import Task from "../models/task.js"


const app=express.Router();

app.use(express.json());
//creation of new task
app.post("/tasks",async(req,res)=>{
    try{
        console.log(req.body);
        const { title, description, dueDate, priority} = req.body;

        // Check if the required properties are present
        if (!title || !description || !dueDate || !priority) {
            return res.status(400).json({ error: "Missing required fields in request body" });
        }
        const newTask=new Task({
            title,
            description,
            dueDate,
            priority,
        });
        await newTask.save();
        res.status(201).json({message:'Task Created Successfully',newTask});
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
});

//reading task
app.get('/tasks',async(req,res)=>{
    try{
        console.log(req.body);

        const task=await Task.find();

        res.json(task);
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
});

//updating a task
app.put("/tasks/:id",async(req,res)=>
{
    try{
        const {title,description,dueDate,priority}=req.body;
        const updatedTask=await Task.findByIdAndUpdate(req.params.id,{
            title,
            description,
            dueDate,
            priority,
        },{new:true});

        if(!updatedTask)
            {
                return res.status(404).json({message:"task not found"});
            }
            res.json({message:"Task Updated Successfully",task:updatedTask});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});


//deleting a task
app.delete("/tasks/:id",async(req,res)=>{
    try{
        const deletedTask=await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask)
           { return res.status(404).json({message:"task not found"});}
        res.json({message:"Task Deleted Successfully",task:deletedTask});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
//sending count of tasks
app.get("/task-count", async (req, res) => {
    try {
        const pendingCount = await Task.countDocuments({ status: "Pending" });
        const inProgressCount = await Task.countDocuments({ status: "InProgress" });
        const completedCount = await Task.countDocuments({ status: "Completed" });

        // Set the Content-Type header to application/json
        res.setHeader('Content-Type', 'application/json');

        // Log the task counts and response body
        console.log('Task Counts:', { pendingCount, inProgressCount, completedCount });
        console.log('Response Body:', { pendingCount, inProgressCount, completedCount });

        // Send the JSON response with task counts
        res.json({ pendingCount, inProgressCount, completedCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//sending tasks based on status
app.get("/tasks/:status",async(req,res)=>{
    const {status}=req.params;
    try{
        
        const tasks= await Task.find({status});
        res.setHeader('Content-Type', 'application/json');
        res.json(tasks);
    }
    catch(error)
    {
        console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server Error' });
    }
});

//updating status and progress
app.patch("/tasks/:id/progress", async (req, res) => {
    try {
      const taskId = req.params.id;
      const progress = req.query.progress;
  
      if (!progress || isNaN(progress) || progress < 0 || progress > 100) {
        return res.status(400).json({ message: "Progress must be a number between 0 and 100" });
      }
  
      let status = "Pending";
      if (progress > 0 && progress < 100) {
        status = "InProgress";
      } else if (progress == 100) {
        status = "Completed";
      }
  
      const updatedTask = await Task.findByIdAndUpdate(taskId, { status, progress }, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.json({ message: "Task Updated Successfully", task: updatedTask });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

export default app;

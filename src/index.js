const express = require("express");
require('./db/mongoose')
const app = express();
const port = process.env.PORT || 3000;
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
//converts json to object
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log("Server is up on the port: " + port);
});



const myFunction=async()=>{
    const token=jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
    console.log(token)
    const data=jwt.verify(token,'thisismynewcourse')
    console.log(data)
}

myFunction()
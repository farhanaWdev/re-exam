const mongoose = require('mongoose')

 function dbConnection(){
   return mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("database connected")
     }).catch((err)=>{
       console.log("Database connection Error: ", err)
})
}

module.exports =dbConnection

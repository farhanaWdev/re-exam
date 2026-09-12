const mongoose = require('mongoose')
let dbConnection = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ua4vxkq.mongodb.net/${process.env.MONGODB_DATABNAME}?appName=Cluster0`).then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.log("database error: ",err)
    })
}

module.exports =dbConnection
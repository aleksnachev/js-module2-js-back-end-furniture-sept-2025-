import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import mongoose from 'mongoose'

const app = express()
//Setup mongoose
try{
    await mongoose.connect('mongodb://localhost:27017', {
        dbName:'furniture-sept-2025'
    })
    console.log('Succesfully conected to db');
    
}catch(err){
    console.error('Cannot conect do db')
    console.error(err.message)
}
//Add CORS
app.use(cors())
//Add json parser
app.use(express.json())
//Add routes
app.use(routes)

app.listen(3030, () => 'Server is listening on http://localhost:3030...')


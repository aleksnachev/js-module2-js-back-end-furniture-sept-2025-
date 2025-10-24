import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    email:{
        type:String,
        required: [true, 'Email is requred!']
    },
    password:{
        type:String,
        required: [true, 'User password is requred!']
    }
})

const User = model('User', userSchema)
export default User
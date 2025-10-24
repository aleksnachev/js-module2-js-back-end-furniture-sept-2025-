import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email:{
        type:String,
        required: [true, 'Email is requred!']
    },
    password:{
        type:String,
        required: [true, 'User password is requred!'],
        minLength: [6, 'Password too short']
    }
})

userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password,12)
})

const User = model('User', userSchema)
export default User
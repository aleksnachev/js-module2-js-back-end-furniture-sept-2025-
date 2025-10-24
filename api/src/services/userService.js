import User from "../models/User.js"
import bcrypt from 'bcrypt'
import { generateAuthToken } from "../utils/tokenUtils.js"


export default {
    async register(email,password){
        const user =  await User.create({email,password})
        const token = generateAuthToken(user)
        return {
            email: user.email,
            accessToken:token,
            _id: user.id
        }
    },
    async login(email,password){
        const user = await User.findOne({email})

        if (!user){
            throw new Error('Invalid email or password')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid){
            throw new Error('Invalid email or password')
        }

        //Generate token
        
        const token = generateAuthToken(user)
        return {
            email: user.email,
            accessToken:token,
            _id: user.id
        }
    }
}
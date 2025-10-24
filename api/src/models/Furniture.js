import {Schema, model} from 'mongoose'

const furnitureSchema = new Schema({
    make:{
        type: String,
        required: [true, 'Furniture make is required'],
        minLength: [4, 'Make should be at least 4 characters long']
    },
    model:{
        type: String,
        required: [true, 'Furniture model is required'],
        minLength: [4, 'Model should be at least 4 characters long']

    },
    year:{
        type: Number,
        min: [1950, 'Year should be at least 1950'],
        max: [2050, 'Year should be below 2050'],
        required: [true, 'Year is required']
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description should be at least 10 characters long']
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price should be positive number']
    },
    imageUrl:{
        type: String,
        required: [true, 'ImageUrl is required']
    },
    material: {
        type:String,
        required:false
    }
})

const Furniture = model('Furniture', furnitureSchema)
export default Furniture
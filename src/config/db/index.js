
import mongoose from 'mongoose'

async function connect() { 
    try{ 

        await mongoose.connect('mongodb://localhost:27017/education_courses_dev'); 
        console.log('connect successfully')
    }
    catch{
        console.log('connect failure')

    }
}

export default { connect }
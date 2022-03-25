
import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongooseDelete from 'mongoose-delete' 
import mongooseSequence from 'mongoose-sequence'

mongoose.plugin(slug)

const AutoIncrement = mongooseSequence(mongoose);

const Schema = mongoose.Schema; 

const course = new Schema({
    _id: { type: Number},
    name: { type: String, required: true }, 
    description: { type: String },  
    image: { type: String},  
    videoId: { type: String},
    level: { type: String},
    slug: { type: String, slug: "name", unique: true, }
    
}, { 
    _id: false,
    timestamps: true,
});

course.plugin(AutoIncrement);
course.plugin(mongooseDelete, { deletedAt : true });
course.plugin(mongooseDelete, { overrideMethods: 'all' });

const Course = mongoose.model('Course', course);
export default Course
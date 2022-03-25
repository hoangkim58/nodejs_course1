
import express from 'express'; 
import meController from '../app/controllers/MeController.js'

const meRoute = express.Router()

meRoute.get('/stored-courses', meController.storedCourses) 
meRoute.get('/trash-courses', meController.trashCourses) 

export { meRoute }

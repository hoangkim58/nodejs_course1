
import express from 'express'; 
import courseController from '../app/controllers/CourseController.js'

const app = express()
const courseRoute = express.Router()


courseRoute.get('/create', courseController.create) 
courseRoute.post('/store', courseController.store) 
courseRoute.get('/:slug', courseController.show) 
courseRoute.get('/:id/edit', courseController.edit) 
courseRoute.post('/handle-form-actions', courseController.handleFormActions) 
courseRoute.put('/:id', courseController.update) 
courseRoute.delete('/:id', courseController.destroy) 
courseRoute.delete('/:id/delete', courseController.forceDestroy) 
courseRoute.patch('/:id/restore', courseController.restore) 

export { courseRoute }

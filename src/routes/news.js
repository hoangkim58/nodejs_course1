
import express from 'express'; 
import newsController from '../app/controllers/NewsController.js'

const app = express()
const newsRoute = express.Router()


newsRoute.get('/:slug', newsController.show)
newsRoute.get('/', newsController.index)

export { newsRoute }

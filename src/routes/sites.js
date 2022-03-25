
import express from 'express'; 
import sitesController from '../app/controllers/SitesController.js'

const app = express()
const sitesRoute = express.Router()


sitesRoute.get('/', sitesController.index) 

export { sitesRoute }

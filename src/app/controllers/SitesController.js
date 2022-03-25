
import Course from '../models/Course.js'

class SitesController {
    index(req, res, next) {
        
        Course.find({}).lean().limit(req.query.sort)
            .then(courses => { 
                res.render('home',{ courses })
            })
            .catch(next)
    }
    
}

export default new SitesController 

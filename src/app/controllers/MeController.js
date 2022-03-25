

import Course from '../models/Course.js' 

class MeController { 

    // [GET] - /me/stored-courses 
    storedCourses(req, res, next) { 
        let coursesQuery = Course.find({}).lean()
            
        if(req.query.hasOwnProperty('_sort')){
            coursesQuery = coursesQuery.sort({
                [req.query.column]: req.query.type, 
                date: -1,
            })
        }

        Promise.all([coursesQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('./me/stored-courses',{ courses, deleteCount })
            })
            .catch(next)
  
            
    }

    trashCourses(req, res, next) {
        Course.findDeleted({}).lean()
        .then(courses => { 
            res.render('./me/trash-courses',{ courses })
        })
        .catch(next)
    }
}

export default new MeController 
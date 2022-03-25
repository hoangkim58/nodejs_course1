
import { newsRoute } from "./news.js"; 
import { sitesRoute } from "./sites.js"; 
import { courseRoute } from "./courses.js"; 
import { meRoute } from "./me.js"; 


function route(app){

    app.use('/news', newsRoute)
    app.use('/courses', courseRoute)    
    app.use('/me', meRoute)    
    app.use('/', sitesRoute) 
}

export default route

import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan'; 
import methodOverride from 'method-override';  

import SortMiddleware from './app/middlewares/SortMiddleware.js'
import route from './routes/index.js' 
import db from './config/db/index.js' 

const app = express()
const port = 3000

app.use(express.static('src/public')) 
// lib: bodyParser - node > 14 - bodyParser into express
app.use(express.urlencoded({ extended: true }))
// set method: method override
app.use(methodOverride('_method')) 
//custom middlewares
app.use(SortMiddleware)

// HTTP request
// app.use(morgan('combined'))

// DB connect
db.connect()

// Template engine
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b ) => a + b,
      sortable: (field, sort) => { 
        const icons = {
          default: 'fa-solid fa-sort',
          asc: 'fa-solid fa-arrow-down-short-wide',
          desc: 'fa-solid fa-arrow-down-wide-short',
        }

        const types = {
          default: 'desc',
          desc: 'asc',
          asc: 'desc',
        }

        const sortType = field === sort.column ? sort.type : 'default' 
        const icon = icons[sortType] 
        const type = types[sortType]

        return `  <a href="/me/stored-courses?_sort&column=${field}&type=${type}">
                    <i class="${icon}"></i>
                  </a>`
      },
    }
}));
app.set('view engine', '.hbs');
app.set('views', './src/resourses/views');

//Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

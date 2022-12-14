const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

// a massive problem solved

app.get('/', (req, res) =>{
    res.send('server is running');
});

// For all of the courses
app.get('/courses', (req, res) =>{
    res.send(courses);
});

//For specific courses
app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find(sel=> sel.id === id);
    res.send(selectedCourse);
});

// category section
app.get('/categories', (req, res) =>{
    res.send(categories);
});



app.listen(port, ()=>{
    console.log('cs learners server running on port ', port);
})
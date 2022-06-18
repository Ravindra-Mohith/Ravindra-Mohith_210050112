//This app was made by Pamba Ravindra Mohith(210050112),honestly,with self efforts.
//third party packages installed:Express,Mongoose,nodemon(for checking continously and development),hbs(handlebars for viewing templates),moment(for date&time)
//!!Note:No bootstrap included!!everything is done from scratch.


//including express:
const express = require('express');
const app = express();
//Port:
const Port = process.env.Port || 5000;

//Mongoose and MongoDB connections:
require("./db/conn");
const candidate = require('./models/registration');

//Path:
const path = require('path');
//handlebars:
const hbs = require('hbs');
//date&time:
const time = require('moment');

//joining paths:
const staticpath = path.join(__dirname, "../Public");
const template = path.join(__dirname, "../templates/views")
const partials = path.join(__dirname, "../templates/partials")

//Midleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Using handlebars(viewing templates):
app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set('views', template);
//including partials:
hbs.registerPartials(partials);

//navigations:
app.get('/', (req, res) => {
    res.render('index');
});


app.get('/registration', (req, res) => {
    candidate.find((err, docs) => {
        //passing data to templates:
        res.render('reg', { data: docs });
    })
})

//saving data:
app.post('/registration', async (req, res) => {
    try {
        res.render('posted')
        const F = new candidate({
            firstname: req.body.firstname,
            email: req.body.email,
            subject: req.body.subject,
            doubt: req.body.doubt,
            time: time().format()
        })
        F.save();
    } catch (error) {
        res.status(400).send('Error!, Fill all the blanks')
    }
})

//deploying:
app.listen(Port, () => {
    console.log(`Server started on port ${Port}`);
});
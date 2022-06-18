const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {
    usenewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('Successfully connnected to database'); }).catch((e) => {
    console.log('Error while connecting to database')
    console.log(e);
})

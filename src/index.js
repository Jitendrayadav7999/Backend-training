const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const GlobalMiddleware = require("./middlewares/GlobalMiddleware")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://jitendra7999:Kunal8602@cluster0.2quthrr.mongodb.net/jitendra?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (GlobalMiddleware.GlobalMiddleware);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

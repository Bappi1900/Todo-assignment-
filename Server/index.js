

const express = require('express')
const cors = require('cors')


// @ts-ignore
require('dotenv').config();

// @ts-ignore
const { todoRouter } = require("./routes/todo.js")


 

const port = 3001
//const port = process.env.PORT || 3000;  





const app = express();
app.use(cors());

app.use(express.json());


app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter);





app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})
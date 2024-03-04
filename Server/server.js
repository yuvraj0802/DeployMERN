const express = require('express');
var cors = require('cors');

const app = express(); // intiate express in app variable
app.use(express.json()); //global middleware 
app.use(cors({
    origin: ['https://deploy-mern-frontend-gamma.vercel.app/'],
    methods: ['POST','GET'],
    credentials: true
})) ;


app.get('/', (req,res)=>{
    res.json('api is running')
})

const port = process.env.PORT || 4000;
app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});


const userRouter = require('./Routers/userRouter');
app.use("/user", userRouter);

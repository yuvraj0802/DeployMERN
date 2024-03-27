const express = require('express');
var cors = require('cors');

const app = express(); // intiate express in app variable
app.use(express.json()); //global middleware 
app.use(cors({
    origin: ['https://6603097a1392da7400a74b0f--helpful-blancmange-30b696.netlify.app/'],
    methods: ['POST','GET'],
    credentials: true
})) ;

app.use(cors());

app.get('/', (req,res)=>{ 
    res.json('api is running')
})
 
const port = process.env.PORT || 4000;
app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});


const userRouter = require('./Routers/userRouter');
app.use("/user", userRouter);

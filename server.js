const express=require('express');
const App=express();
const date= new Date();
const day= date.getDay();
const hours=date.getHours();
const midlleweare=(req, res, next) => {
    if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
      next();
    } else {
      res.send("<h1>server is closed</h1>");
    }
  };
  App.use(midlleweare);
/*App.get('/', (req,res)=>{
    res.sendFile(__dirname+'/HomePage.html')
})
App.get('/HomePage.css', (req,res)=>{
    res.sendFile(__dirname+'/HomePage.css')
})*/
App.use(express.static("public"));
const port=2000;
App.listen(port, ()=>console.log(`server is running on port ${port} `));
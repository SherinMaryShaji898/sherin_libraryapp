const express = require('express');
const authorsRouter = express.Router();
function router(nav){
var authors= [{
    
    title:'J K Rowling',
     author:'British Author',
     other:'Philanthropist, film producer, television producer,screenwriter',
     img:"rowling.jpg"
 },
 {
     title:'Vaikom Muhammad Bhasheer',
     author:'Indian writer',
     other:'Indian independence activist',
     img:"bhasheer.jpg"
 },
 {
     title:'Manu s Pillai',
     author:'Indian author',
     other:'Historian',
     img:"manu.jpg"
 },
 {
     title:'Chethan Bhagath',
     author:'Indian author',
     other:'Columnist,Motivational speaker',
     img:"chethan.jpg"
 }]
 authorsRouter.get('/',function(req,res){
     res.render("authors",{
        nav,
         title:'Library',
         authors
     });
 });
 authorsRouter.get('/:id',function(req,res){
     const id= req.params.id;
      res.render("author",
      {
          nav,
          title:'Library',
          author:authors[id]
      });
  
  });
  return authorsRouter;
}
module.exports=router;
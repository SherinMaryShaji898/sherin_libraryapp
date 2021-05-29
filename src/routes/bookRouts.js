const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [{
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fantacy',
        img:"harry.jpg"
    },
    {
        title:'Mathilukal',
        author:'Vaikom Muhammad Bhasheer',
        genre:'Romance,Patriotism',
        img:"mathil.jpg"
    },
    {
        title:'Ivory Throne',
        author:'Manu s Pillai',
        genre:'History,Biography',
        img:"ivory.jpg"
    },
    {
        title:'Revolution 2020',
        author:'Chethan Bhagath',
        genre:'Romance',
        img:"revolution.jpg"
    }]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });
    booksRouter.get('/:id',function(req,res){
       const id= req.params.id;
        res.render("book",
        {
            nav,
            title:'Library',
            book:books[id]
        });
    
    });
    return booksRouter;
}

module.exports=router;
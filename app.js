const express = require('express');


const app = express();

const  nav=[{link:'./books',name:'Books'},{link:'./authors',name:'Authors'},{link:'./addbook',name:'Add New Book'},{link:'./addauthor',name:'Add New Authors'},{link:'./signup',name:'Sign Up'},{link:'./signin',name:'Sign In'}];

const booksRouter= require('./src/routes/bookRouts')(nav);
const authorsRouter= require('./src/routes/authorRouts')(nav);
const addbookRouter= require('./src/routes/addbookRouts')(nav);
const addauthorRouter= require('./src/routes/addauthorRouts')(nav);
const signinRouter= require('./src/routes/signinRouts')(nav);
const signupRouter= require('./src/routes/signupRouts')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.get('/',function(req,res){
    res.render("index",{
       nav,
        title:'Library'
    });
});

// sign in router


// sign up router

app.listen(5000);
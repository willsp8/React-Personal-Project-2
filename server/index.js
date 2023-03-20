// notes i was getting some 500 erros 
    // heres a link how i solved them https://stackoverflow.com/questions/60354434/axios-post-is-giving-me-an-error-internal-server-error
    // this for conecting to the database https://stackoverflow.com/questions/29194641/er-access-denied-error-access-denied-for-user-rootlocalhost-in-cloud9-ide

// this the same as request
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require('body-parser');

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require('bcrypt');
const saltRounds = 10

const { response } = require("express");


app.use(express.json())
app.use(cors(
    {
        origin: ["http://localhost:3001"],
        methos: ["GET", "POST"],
        credentials: true
    }
))
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    key: "userId",
    secret: "sub",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        expries: 60 * 60 * 24
    }
}))


// note all of the data is going the react-app database 
// this will be used for all of the calls to delete and submit info to our database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    port: 3306,
    
    database: "react_app",

})
module.exports = db

app.get("/Login", (req, res) => {
    if(req.session.user)
    {
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})


// making a route called create
// note you want to grab something from the front you use req which means rquest
//note if you want to submit something to the front you use res
app.post('/create', (req, res) => {
    //console.log(req.body)
    const name = req.body.name
    
    console.log(name)
    const username = req.body.username
    const password = req.body.password
    

    // making the password into a hash password
    bcrypt.hash(password, saltRounds,(err, hash) => {


        // if we get an error print out error
        if(err)
        {
            console.log(err)
        }

        // if the result length of the array is higher than 0 then run the code
        
        // sending info to our database where the password is not the direct password but our hash map password 
        db.query("INSERT INTO app_user (username, password) VALUES(?,?)", 
        [username, hash],
        (err,result) =>{
            if(err)
            {
                console.log(err)
            }else
            {
                res.send("values submitted")
            }
        })
        
        
    })
    
    // THE question marks are the username and password
    
})

app.post('/Login', (req, res) => {
    //console.log(req.body)
    //const name = req.body.name
    const username = req.body.username
    const password = req.body.password
    
    
    // THE question marks are the username and password
    // we are getting all of the passwords and usernames from our sql database
    db.query(
        'SELECT * FROM app_user WHERE username = ?;', 
        username,
        (err,result) =>{
            if(err)
            {
                console.log(err)
            }else
            {
                // if there exist a user 
                if(result.length > 0)
                {
                    // note result is the element from the database so the user in this case
                    bcrypt.compare(password, result[0].password, (error, response) =>{
                        if(response)
                        {
                            req.session.user = result
                            
                            res.send(result)
                        }else{
                            console.log(response)
                            res.send({message: "Wrong username/password combination"})
                        }
                    })
                }else{
                    res.send({message: "cannot find user"})
                }
            }
    })
})


app.post('/logout' , (req, res) => {
    console.log("addd res")
    req.session.user = ''
    res.clearCookie("userId", { path: "/" });
    res.destroy()
    res.status(200).json({ success: true, message: "User logged out successfully" });

})

// app.get("/logout", (req, res) => {
//     res.send("You have been logged out successfully");
//   });


app.listen(3000, ()=> {
    console.log("hey server is running on 3000")
});
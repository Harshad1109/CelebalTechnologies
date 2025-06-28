const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

const userRouter = require("./routes/user.js");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use("/user",userRouter);


app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})

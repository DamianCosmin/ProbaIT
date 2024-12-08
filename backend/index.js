const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
app.use(cors());
app.use(express.json())

// Gets the registration info from 'userdata.json' file
app.get("/user", (req, res) => {
    var fileInfo = fs.readFileSync('userdata.json');
    var jsonFileInfo = JSON.parse(fileInfo);
    return res.json(jsonFileInfo);
})

// Send registration info to the backend server and store it into the 'userdata.json' file
app.post("/user", (req, res) => {
    var registerInfo = req.body;
    console.log(registerInfo);
    fs.writeFileSync('userdata.json', JSON.stringify(registerInfo));
    if(!registerInfo){
        return res.status(400).send({status: "failed"});
    }
    res.status(200).send({status: "received"});
}) 

app.listen(3000, () => {
    console.log("port connected");
})


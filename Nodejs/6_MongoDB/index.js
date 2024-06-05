/*
1. get - When you want to get some data from server. whenever we put some url on our browser and click enter on it it is a kind of get request on the server 
itgoes to data base and reads data and sends it back to server 

2. post - send some data on server and mutate some data in server
we make post reques for our forms 
when we click on create account it send formData in the body, then it will read the data and mutate that data on our server

3. delete

4. put - update resources, create an resource
*/

const express = require("express")
const fs = require("fs");
const mongoose = require("mongoose")
const app = express();
const port = 8000;


//connection
mongoose.connect("mongodb://127.0.0.1:27017/project2").then(()=>console.log("Mongodb connected")).catch((err)=>console.log("mongo error",err))

const schema = new mongoose.Schema({
    first_name:{
        type : String,
        required:true,
        unique : true
    },
    last_name : {
        type : String,
    },
    email : {
        type:String,
        required:true,
        unique:true,
    },
    gender : {
        type:String,
    },
    ip_address : {
        type:String,
        unique:true
    }
},
{timestamps:true}
)

const User = mongoose.model("user",schema);

//plugin
app.use(express.urlencoded({ extended: false })) //it will put data into our body

// Routes
app.get("/users", async (req, res) => {
    const allDbusers = await User.find({});
    const html = `
    <ul>
        ${allDbusers.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// app.get("/api/users", (req, res) => {
//     return res.json(users)
// })

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

// app.get("/api/users/:ip", (req, res) => {
//     const ip = Number(req.params.ip);
//     const user = users.find((user) => user.ip_address === ip);
//     return res.json(user);
// })

// app.put("/api/users/:ip", (req, res) => {
//     res.json({ status: "pending" })
// })

// app.patch("/api/users/:ip", (req, res) => {
//     res.json({ status: "pending" })
// })

// app.delete("/api/users/:ip", (req, res) => {
//     res.json({ status: "pending" })
// })

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .put((req, res) => {
        const id = Number(req.params.id);
        res.json({ status: "pending" })
    })
    .patch((req, res) => {
        res.json({ status: "pending" })
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
                res.json({ status: "completed" })
            })
        }
        else{
            return res.status(404).json({msg:"enter valid id"})
        }
        console.log(users);
    })

app.post("/api/users", async (req, res) => {
    const body = req.body; 
    console.log("body",body);
    if(!body.first_name || !body.email){
        return res.status(404).json({msg:"all  fields are req"})
    }
    else{
        const result = await User.create({
            first_name : body.first_name,
            last_name : body.last_name,
            gender : body.gender,
            ip_address: body.ip_address,
            email : body.email
         });
         console.log("result",result);
         return res.send(201).json({msg:"success"})
    }
})


app.listen(port, () => console.log(`Server started at ${port}`));
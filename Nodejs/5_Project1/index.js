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
const users = require("./MOCK_DATA.json");
const { type } = require("os");
const { required } = require("nodemon/lib/config");

//plugin
app.use(express.urlencoded({ extended: false })) //it will put data into our body

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
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
        console.log(users);
    })

app.post("/api/users", (req, res) => {
    const body = req.body; //we get the request in this body, that is on client side we do the post request on our server and then we get the value in body and now we will have to add it in or database, for now we add it in .json file
    // console.log("body",body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length + 1 })
    })
})


app.listen(port, () => console.log(`Server started at ${port}`));
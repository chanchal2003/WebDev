/*
Suppose you want to create web server in nodejs than we need to use http module in which createServer funcionality is present that has req and res parameters 
*/

const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
    console.log(req);
    const log = `${Date.now()}: ${req.url}\n`;
    const myURL = url.parse(req.url,true);
    console.log(myURL)
    fs.appendFile('log.txt', log, (err, data) => {
        if (err) {
            console.error(err);
        }
    });
    switch (myURL.pathname) {
        case '/':
            res.end("HomePage")
            break;
        case '/about':
            const qp=myURL.query.myname;
            console.log(qp);
            res.end(`Hi, ${qp}`)
            break;
        case '/contact':
            res.end("contact me here")
            break;
        default:
            res.end("Not found")
            break;
    }
});

myserver.listen(8000, () => {
    console.log("Server started");
});

//post->suppose humein koi form fill karna hai toh fill karek hum submit karte so that it gets submitted and edited in the db in this case we use post req to do it

//put -> upload file

//patch->edit

//delete->delete account


// hhtp module cannot parse the req.url, it does not know what are the query parameters and what is the address

//get -> get request on server, get some data from server, it gies to db and reads the data and sends it back to client 
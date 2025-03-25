//Main file
//Sets off everything

const http = require('http')
const fs = require('fs')

// Create Http server
const server = http.createServer((req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html'});

    // read and serve html file
    fs.readFile('main/html/index.html', (err, data) => {
        if (err) {
            res.write('<h1>Error loading the file</h1>');
            res.end();
          } else {
            res.write(data);
            res.end();
          }
    })
})

// start server on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
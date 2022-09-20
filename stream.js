const http = require('http');
const fs = require('fs');
const Stream = require('stream')
const { parse } = require('csv-parse');
const { buffer } = require('stream/consumers');
// const stream = fs.createReadStream(`${__dirname}/data.csv`);


const server = http.createServer(function (req, res) {
    const parser = parse({
        delimiter: ','
    });
    const records = [];
    const csvFile = fs.createReadStream('./data.csv')
    .pipe(parse({}))

    csvFile.on('data',(data)=>{
        records.push(data)
    })

    csvFile.on('end',()=>{
        res.end(JSON.stringify(records))
    })    
})

server.listen(3000)
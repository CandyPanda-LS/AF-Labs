//1
console.log("Hello world")

//2
const os = require('os');
console.log(os.arch());
for (const cpu of os.cpus()){
    console.log(cpu);
}
console.log(os.uptime());

//3
const fs = require('fs');
const fileName = 'test.txt';
fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data.toString())
}

)

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

//4
const InfileName = __dirname +'/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(InfileName); //read the file
const writeStream = fs.createWriteStream(outFileName); //write the file

readStream.on('end',() => {
    console.log('End of reading file.');
});

writeStream.addListener('close',()=>{
    console.log('End of writing file.');
    console.log(fs.readFileSync('test-copy.txt','utf-8'));
});

readStream.pipe(writeStream);

//5
const http = require('http');
http.createServer((req ,res) => {
    res.setHeader('Content-Type', 'text.html');
    res.write('<p>Hello world</p>')
    switch (req.method){
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',data =>{
                res.write('<h1> Hello ' + data + '</h1>' );
                res.end();
            });
            break;
        case 'PUT':
            res.on('data',data=>{
                res.write('<h1> Put method success</h1>' +data);
                res.end();
            });
            break;

    }
    res.end()
}).listen(3000,err=>{
    if (err){
        console.log(err)
        return
    }
    console.log('Server is listninng on port 3000')
})
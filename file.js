const fs = require('fs');
fs.readFile('utk.txt','utf8',(err,data)=>{
    console.log(err,data);
})

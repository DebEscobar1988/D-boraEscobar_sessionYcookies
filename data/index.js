const {readFileSync,writeFileSync} = require('fs');
const path = require('path')


 readJSON =(json)=>{
    return JSON.parse(readFileSync(path.resolve(__dirname,json)))
 },
 writeJSON = (array, file)=>{
    writeFileSync(path.resolve(__dirname,file),JSON.stringify(array,null,3),'utf-8')
 }



module.exports = {
readJSON,
writeJSON
}
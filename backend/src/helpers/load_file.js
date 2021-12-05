const fs = require('fs')
const path = require('path')   
const filePath = path.join(__dirname, '../uploads');
const data = fs.readFileSync(filePath+"/rooms.txt", 'utf8')
let rooms =[]
if (data){
    rooms =data.split('\n')
}
module.exports =rooms
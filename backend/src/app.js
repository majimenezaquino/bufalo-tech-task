const rooms =require("./helpers/load_file")
const BulbDistribution =require("./helpers/bulb_distribution")
const express =require("express")
const cors = require('cors')
const app =express()
bd1 = new BulbDistribution(rooms)
const roomArr =bd1.getRooms()
let dataset =[]
let point ={}
let arr=[]
let bulbCount =0
 const main=(data) =>{
    if(!bd1.isValidShape()){
       console.error("The form of the dataset is invalid.")
       return false
    }
    point =bd1.getBestPoint(data)
    arr =bd1.changeCharacterPosition(data,point.x,point.y,'*',point.countX ,point.countY)
    if(point.countX +point.countY){
      arr =bd1.changeArraryAt(arr,point.x,point.y,'b')
    }
    
     console.table(arr)
     console.log(point)
     bulbCount++
     console.log(`**************** line ${bulbCount-1} ***********************`)
     dataset =arr
     if(point.countX + point.countY>0){
       main(arr)
     }
     return arr
}
console.log("**************** Init ***********************")
main(roomArr)
if (bulbCount>0)bulbCount=bulbCount-1
console.log("Bulbs",bulbCount-1)


app.use(cors())

app.get("/datates",(req,res)=>{
   dataset =dataset.map(a=>Array.from(a))
res.json(dataset)
})



app.listen(3000)


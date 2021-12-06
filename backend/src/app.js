const rooms =require("./helpers/load_file")
const BulbDistribution =require("./helpers/bulb_distribution")
const express =require("express")
const cors = require('cors')
const app =express()
bd1 = new BulbDistribution(rooms)
const roomArr =bd1.getRooms()
let dataset =[]

let contador =0
 const main=(dataset) =>{
    let point =bd1.getBestPoint(dataset)
    let arr =bd1.changeCharacterPosition(dataset,point.x,point.y,'*',point.countX ,point.countY)
     console.table(arr)
     console.log(point)
     console.log("--------------------------------")
    
     if(point.countX + point.countY>0){
        main(arr)
     }
     contador++
     return arr
}



app.use(cors())
app.get("/datates",(req,res)=>{
let dataset=main(roomArr)
console.log("bonbillos",contador)
res.json(dataset)
})

app.listen(3000)
console.log("Rum")

const rooms =require("./helpers/load_file")
const BulbDistribution =require("./helpers/bulb_distribution")

bd1 = new BulbDistribution(rooms)
let roomArr =bd1.getRooms()
bd1.getPosition(roomArr)

const {x,y}=bd1.getSize(roomArr)
let m1 = bd1.markPoints(roomArr)
console.log("interarcion 1")
console.table(m1)

 m1 = bd1.markPoints(roomArr)
console.log("interarcion 2")
console.table(m1)
// for(let index in [...Array(y).keys()]){
//     for(let index2 in [...Array(x).keys()]){
//         let {x,y} = bd1.getBestPoint(m1)
//         let arr =Array.from(m1[y])
//         arr[x]='2'
//         m1[y]=arr.join("")
//         m1 = bd1.markPoints(m1)
//         console.table(m1)
//     }
// }

// console.log("shape",bd1.isValidShape())
// // console.log("position",bd1.gerVerticalSteet(bd1.getRooms(),0))
// // bd1.getSteepNumber([ '1', '2', '3', '4', '2', '1' ],2)

// console.log(bd1.getPosition(roomArr))
// console.log(bd1.getBestPoint([ '0010011', '1101010' ,'1001010','0010011']))
// console.table(m1)

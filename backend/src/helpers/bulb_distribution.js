const STEET_FREE ='0'
class BulbDistribution{
    constructor(rooms){
        this.rooms =rooms
        this.position =[]
        this.barrier='1'
        console.table(rooms)
    }
    isValidShape(){
        for(let room of this.rooms){
            //valid sizeX and sizeY
            if(this.rooms[0].length!=room.length) return false
            //validate special character
            if(room.replace(/[01]/g,'').length) return false

        }
        return true
    }
    getPosition(rooms){
        //Get all the points with their coordinates
        let positions =[]
        let dataset = rooms.map(a=>Array.from(a))
        for(let indexY in dataset){
            let y = parseInt(indexY)
            let x = 0
            let positionX =0
            let positionY =0
            for(let indexX in dataset[indexY]){
                x = parseInt(indexX)
                if(dataset[indexY][indexX]!='0'){
                    positionX = 0
                    positionY = 0
                }else{
                 let arrVertical = this.gerVerticalSteeps(dataset,x)
                 let arrHorizontal = dataset[indexY]
                 positionX = this.getSteepNumber(arrHorizontal,x)
                 positionY = this.getSteepNumber(arrVertical,y)
                }
                positions.push({x,y,countX:positionX,countY:positionY})
            }
        }
        const l =positions
        return l
    }
    gerVerticalSteeps(room,positX){
        //This method converts the vertical array to horizontal
        let data =[]
        for(let steep of room){
            data.push(steep[positX])
        }
        return data
    }
    getRooms(){
        return this.rooms
    }
    getSteepNumber(roomLine,pointX){
        //This method takes an array and a position and returns the steps it illuminates.
        if(roomLine[pointX]=='1'){
            return 0
        }
        let arrLeft =roomLine.slice(0, pointX).reverse()
        let arrRight =roomLine.slice(pointX, roomLine.length)
        let countX =this._getCountSteep(arrLeft)
        let countY = this._getCountSteep(arrRight)
        let resul =countX + countY
        return resul
    }
    _getCountSteep(arr){
        //This method receives an array and returns the amount of step that can be given both to the right and to the left.
        let result =0
        for(let char of arr){
            if(char!='0'){
                return result
            }
            result++
        }
        
        return result
        
    }

    getBestPoint(arr){
        //This method returns the closest point.
        let current= { x: '0', y: '0', countX: 0, countY: 0 }
        const arrarPoint =this.getPosition(arr)
        for(let item of arrarPoint){
            if (current.countX + current.countY < item.countX +item.countY){
                current = item
            }
        }
        return current
    }
  
  
    getSize(arr){
        return {
            x: arr[0].length,
            y: arr.length
        }

    }


  changeCharacterPosition(arr,x,y,char,countX=0,countY=0){
      if(countY>0)countY =countY-1
    let dataset = arr.map(l=>Array.from(l))
    let arrayY = dataset.map(p=>p[x])
    //draw barrier 
    let arrayX = dataset[y]
   
    arrayX =this.drawPointsBarrier(arrayX,x,char,this.barrier)
    arrayY = this.drawPointsBarrier(arrayY,y,char,this.barrier)
    dataset[y]=arrayX
    //add value y
    for(let item in arrayY){
        let line =dataset[item]
        line[x]=arrayY[item]
        dataset[item] =line

    }
    return dataset.map(a=>a.join(""))
  }


drawPointsBarrier(arr,index,char,barrier){
    let barrier1= false
    let barrier2= false
    let arr1=arr.slice(0, index).reverse().map((p,i)=>{
        if(p!=barrier && !barrier1) return char
        barrier1 =true
        return p
    }).reverse()
    
    let arr2=arr.slice(index, arr.length).map((p,i)=>{
        if(p!=barrier && !barrier2) return char
        barrier2 =true
        return p
    })
    const resul =arr1.concat(arr2)
    return resul
}
    
changeArraryAt(arr,x,y,char){
    let dataset =arr.map(l=>Array.from(l))
    dataset[y][x]=char
    return dataset.map(l=>l.join(""))
}
}
module.exports =BulbDistribution
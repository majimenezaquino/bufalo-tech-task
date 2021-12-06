const STEET_FREE ='0'
class BulbDistribution{
    constructor(rooms){
        this.rooms =rooms
        this.position =[]
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
                 let arrVertical = this.gerVerticalSteet(dataset,x)
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
    gerVerticalSteet(room,positX){
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
    markPoints(arr){
    const p =this.getBestPoint(arr)
    let linex=Array.from(arr[parseInt(p.y)])
    let liney = this.gerVerticalSteet(arr,p.y)
    let x = parseInt(p.x)
    let y = parseInt(p.y)
    linex =this._updateArray(linex,y,'*')
    liney =this._updateArray(liney,x,'*')
    arr[y]=linex.join("")
    for(let index in liney){
        
        let l = Array.from(arr[index])
            l[p.x]=liney[index]
        arr[index] = l.join("")
    }
    console.log(arr)
    
    
   return arr
    }
    _updateArray(arr,x,char){
        
        //method to change caprater
        let arrLeft =arr.slice(0, x).reverse()
        let arrRight =arr.slice(x, arr.length)
        let arr3 =this.changeCharacter(arrLeft,'1',char)
        let arr4 =this.changeCharacter(arrRight,'1',char)
        let a= arr3.reverse().concat(arr4)
        return a
    }
    changeCharacter(arr,charLimit,char){
        //metodo para cambiar los caprater
        let resul =arr
        for( let index in arr){
            if(arr[index]==charLimit){
                return resul
            }
            resul[index]=char
        }
        return resul
    }
    getSize(arr){
        return {
            x: arr[0].length,
            y: arr.length
        }

    }


  changeCharacterPosition(arr,x,y,char){
      //This method changes a specific character of the array at the x and y coordinates y
      let arrX = Array.from(arr[y])
       arrX[x]=char
       arr[y]=arrX.join("")
      return arr
  }

    
}
module.exports =BulbDistribution
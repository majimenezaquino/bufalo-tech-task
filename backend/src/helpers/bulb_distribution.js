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
        this.position =[]
        for(let indexY in rooms){
            let arrHorizontal =Array.from(rooms[indexY])
            for(let indexX in rooms[indexY]){
                let arrVertical = this.gerVerticalSteet(rooms,indexX)
                
                    this.position.push({x:indexX,
                        y:indexY,countX:this.getSteepNumber(arrHorizontal,indexX)
                        ,countY:this.getSteepNumber(arrVertical,indexY)})
            }
        }
       
        return this.position
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
        // console.log("Posicion encontrada",roomLine,countX,countY)
        return countX + countY
    }
    _getCountSteep(arr){
        //This method receives an array and returns the amount of step that can be given both to the right and to the left.
        let result =0
        result = (arr||[]).indexOf("1")
        if(arr.indexOf("1")<0){
            result = arr.length
        }
        return result
    }

    getBestPoint(arr){
        //This method returns the closest point.
        let current= { x: '0', y: '0', countX: 0, countY: 0 }
        for(let item of this.getPosition(arr)){
            if (current.countX +current.countY < item.countX +item.countY){
                current = item
            }
        }
        return current
    }
    markPoints(arr){
    let p =this.getBestPoint(arr)
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

  

    
}
module.exports =BulbDistribution
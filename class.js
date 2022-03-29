
//======================================


//======================================










//=================================
//====================================
//===========================
// class GrassEater{
//     constructor(x, y, index){
//         this.x = x
//         this.y = y
//         this.index = index
//         this.energy = 8
//         this.directions = []
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ]
//     }

//     chooseCell(character){
//         this.getNewCoordinates()
//         var found = []
//         for(var i in this.directions){
//             var x = this.directions[i][0]
//             var y = this.directions[i][1]
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }  
//         }
//         return found
//     }

//     mul() {
//         var found = this.chooseCell(0)
//         var newCell = random(found)
//         if(newCell && this.energy >= 10){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 2
//             grassEaterArr.push(new GrassEater(newX, newY))
//             this.energy = 8

//         }
           
//     }

//     move(){
//         var found = this.chooseCell(0)
//         var newCell = random(found)
//         if(newCell){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 2

//             matrix[this.y][this.x] = 0

//             this.x = newX
//             this.y = newY
//         }
//         this.energy --
//         if(this.energy < 0){
//             this.die()
//         }
//     }

//     eat(){
//         var found = this.chooseCell(1)
//         var newCell = random(found)

//         if(newCell){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 2

//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
//             this.energy ++

//             for(var i in grassArr){
//                 if(newX == grassArr[i].x && newY == grassArr[i].y ){
//                     grassArr.splice(i,1)
//                     break
//                 }
//             }
//             if(this.energy >= 20){
//                 this.mul()
//             }
//         }else{
//             this.move()
//         }
//     }

//     die(){
//         for(var i in grassEaterArr){
//             if(this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y){
//                 grassEaterArr.splice(i, 1)
//                 break 
//             }
//         }
//         matrix[this.y][this.x] = 0
//     }
// }
//====================================
//====================================
//====================================
//====================================
//====================================

// class Xishnik {
//     constructor(x, y, index){
//         this.x = x
//         this.y = y
//         this.index = index
//         this.energy = 140
//         this.directions = []
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ]
//     }

//     chooseCell(character){
//         this.getNewCoordinates()
//         var found = []
//         for(var i in this.directions){
//             var x = this.directions[i][0]
//             var y = this.directions[i][1]
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }  
//         }
//         return found
//     }

//     mul() {
//         var found = this.chooseCell(2)
//         var newCell = random(found)
//         if(newCell && this.energy >= 20){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 2
//             xishnik.push(new Xishnik(newX, newY, 3))
//             this.energy = 1

//         }
//     }

//     move(){
//         var found = this.chooseCell(0)
//         var newCell = random(found)
//         if(newCell){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 3

//             matrix[this.y][this.x] = 0

//             this.x = newX
//             this.y = newY
//         }
//         this.energy --
//         if(this.energy < 1){
//             this.die()
//         }
//     }

//     eat(){
//         var found = this.chooseCell(2)
//         var newCell = random(found)

//         if(newCell){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 3

//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
//             this.energy ++

//             for(var i in grassEaterArr){
//                 if(newX == grassEaterArr[i].x && newY == grassEaterArr[i].y ){
//                     grassEaterArr.splice(i,1)
//                     break
//                 }
//             }
//             if(this.energy >= 30){
//                 this.mul()
//             }
//         }else{
//             this.move()
//         }
//     }

//     die(){
//         for(var i in xishnik){
//             if(this.x == xishnik[i].x && this.y == xishnik[i].y){
//                 xishnik.splice(i, 1)
//                 break 
//             }
//         }
//         matrix[this.y][this.x] = 0
//     }
// }




// class Hero {
//     constructor(x, y){
//         this.x = x
//         this.y = y
//         this.directions = []
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x + 1    , this.y - 3],
//             [this.x + 1    , this.y - 2],
//             [this.x + 1    , this.y - 1],
//             [this.x + 1    , this.y + 1],
//             [this.x + 1    , this.y + 2],
//             [this.x + 1    , this.y + 3],
//             //[this.x - 1, this.y - 1],
//             [this.x    , this.y - 3],
//             [this.x    , this.y - 2],
//             [this.x    , this.y - 1],
//             [this.x    , this.y + 1],
//             [this.x    , this.y + 2],
//             [this.x    , this.y + 3],
//             //
//             [this.x - 1 , this.y - 2],
//             [this.x - 1 , this.y - 1],
//             [this.x - 1 , this.y    ],
//             [this.x - 1 , this.y + 1],
//             [this.x - 1 , this.y + 2],
//             //
//             [this.x - 2 , this.y - 1],
//             [this.x - 2 , this.y    ],
//             [this.x - 2 , this.y + 1],
//             //
//             [this.x - 3 , this.y    ],
//         ]
//     }

//     chooseCell(character1, character2, character3){
//         this.getNewCoordinates()
//         var found = []
//         for(var i in this.directions){
//             var x = this.directions[i][0]
//             var y = this.directions[i][1]
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//                 if (matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3) {
//                     found.push(this.directions[i]);
//                 }
//             }  
//         }
//         return found
//     }
    
//     move(){
//         var found = this.chooseCell(1, 2, 3)
//         var newCell = random(found)
//         if(newCell){
//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = 4

//             matrix[this.y][this.x] = 0

//             this.x = newX
//             this.y = newY
//         }
        
//     }

//     eat(){
//         var found = this.chooseCell(1, 2, 3)
//         //var newCell = random(found)
//         //===================

//         for(let i = 0; i< found.length; i++){
//             if(true){
//                 var newX = found[i][0]
//                 var newY = found[i][1]
//                 matrix[newY][newX] = 4
    
//                 matrix[this.y][this.x] = 0
//                 this.x = newX
//                 this.y = newY
//                 newX--
//                 for(let i in hero){
//                     if(newX == hero[i].x && newY == hero[i].y ){
//                         this.move()
//                     }
//                 }
                
//             }
//             // for(let i = 0; i< matrix.length; i++){
//             //     if(newX == matrix[i][0] ){
//             //         alert(8)
//             //     }
            
//             // }
//         }
//         //====================
//         //var found = this.chooseCell(1, 2, 3)
//         //var newCell = random(found)

//         // if(newCell){
//         //     var newX = newCell[0]
//         //     var newY = newCell[1]
//         //     matrix[newY][newX] = 4

//         //     matrix[this.y][this.x] = 0
//         //     this.x = newX
//         //     this.y = newY

//         //     for(var i in hero){
//         //         if(newX == hero[i].x && newY == hero[i].y ){
//         //             this.move()
//         //         }
//         //     }
//         //  }//else{
//            // this.move()
//         //}
        
//     }
// }






// //====================
// //====================
// //====================




// class stone {
//     constructor (x, y){
//         this.x = x
//         this.y = y
//     }
// }

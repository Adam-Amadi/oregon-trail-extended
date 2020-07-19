// The Traveler class 
// (blueprint) should set the following properties for each instance:
// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a 
// traveler is sick.
// The Traveler class should also have the following methods:
// hunt()  Increases the traveler's food by 2.
// eat() - Consumes 1 unit of the traveler's food. If the traveler doesn't 
// have any food left to eat, the traveler is no longer healthy 
// (set isHealthy to false).
class Traveler {
    constructor (name){
        this.name = name
        this.food= 1
        this.isHealthy = true
    }
    hunt(){
        this.food+= 2
    }

    eat() { 
        if (this.food -= 1){ 
            return this.isHealthy = false
        }   else {
                this.food = 0
        

      }
   }
}

// The Doctor Class
// The Doctor class will extend the Traveler class and have one additional method:
// heal(traveler) - set the traveler's isHealthy property to true.
class Doctor extends Traveler{
    constructor (name, heal){
           super (name)
    }
    heal (traveler){
        traveler.isHealthy= true
    }
}

// The Hunter Class
// The Hunter class will extend the Traveler class, but it will start with 
// 2 food instead of 1. The Hunter class should also have the following methods:
// hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
// eat() - Consumes 2 units of food. If the hunter doesn't have 
// 2 food when they are instructed to eat, they eat as much as they can 
// (0 or 1 unit), but the hunter is no longer healthy.
// giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the hunter to the 
// traveler. If the hunter doesn't have enough food, then no food should be transferred.
class Hunter extends Traveler{
    constructor (name){
        super (name)
        this.food = 2
    }
    hunt (){
        this.food += 5
    }
    eat () {
        if (this.food -= 2){ 
            return this.isHealthy = false
        }   else {
                this.food = 0
        

      }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}


// The Wagon class 
// should set the following properties for each instance:
// a capacity, which must be provided to the constructor: 
// this is the maximum number of passengers a wagon can hold.
// a passengers list, which is initially an empty array.
// The Wagon class should have these methods:
// getAvailableSeatCount() - Returns the number of empty seats, determined by the 
// capacity set when the wagon was created, subtracted by the number of passengers
// currently on board.
// join(traveler) - Adds the traveler to the wagon if there is space.
// If the wagon is already at maximum capacity, don't add them.
// shouldQuarantine() - Returns true if there is at least one unhealthy person 
// in the wagon. Return false if not.
// totalFood() - Returns the total amount of food among all passengers in the wagon.
class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity -this.passengers.length
    }
    join(traveler){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler)}
    }
    shouldQuarantine(){
        for(let index = 0; index < this.passengers.length; index++){
            if(this.passengers[index].isHealthy === false){
                return true
            }
        }
        return false
       
    }
    totalFood(){
        let totaLfood = 0
        for (let counter = 0; counter < this.passengers.length; counter += 1){
              totaLfood += this.passengers[counter].food
            }
            return totaLfood

    }
}
class Appliance{
    constructor(name,power){
        this.name = name,
        this.power = power,
        this.isPlugged = false        
    };  
    getPowerUsed() {
        return this.isPlugged ? this.power: 0;
    };
    Plugged(power) {
        if (power > 0) {
          console.log(`${power} Вт - прибор включен`)
          this.isPlugged = true
        } else {
          console.log(`${power} Вт - прибор выключен`)
        }
      };
}

class Computer extends Appliance{
    constructor(name,color,power){
      super (name,power);  
      this.name = name,
        this.color = color,
        this.power = power    
    }
}

class Lamp extends Appliance{
    constructor(name, model, power){
      super (name,power); 
        this.name = name,
        this.model = model,
        this.power = power
    }
}

const computer = new Computer('Computer', 'Black', 500);
const lamp = new Lamp('Lamp', 'Table', 50);
  
computer.Plugged(500)
lamp.Plugged(50)

function sum(arr){
    let result = 0;
    arr.forEach((item) => {
    result += item.getPowerUsed()
   })
   return result
}
 
console.log(`Суммарная потребляемая мощность всех включенных приборов ${sum([computer, lamp])} Вт`);
function Appliance(name, power) {
    this.name = name,
    this.power = power,
    this.isPlugged = false
};
 
function Computer(name, color, power) {
   this.name = name,
   this.color = color,
   this.power = power
};
 
function Lamp(name, model, power){
   this.name = name,
   this.model = model,
   this.power = power
};
 
Computer.prototype = new Appliance();
Lamp.prototype = new Appliance();
 
const computer = new Computer('Computer', 'Black', 500);
const lamp = new Lamp('Lamp', 'Table', 50);
 
Appliance.prototype.getPowerUsed = function(power) {
    return this.isPlugged ? this.power: 0;
};
 
Appliance.prototype.Plugged = function(power) {
  if (power > 0) {
    console.log(`${power} Вт - прибор включен`)
    this.isPlugged = true
  } else {
    console.log(`${power} Вт - прибор выключен`)
  }
};
 
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
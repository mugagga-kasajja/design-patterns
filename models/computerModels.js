class Computer {
  constructor(name, price, model, brand, serialNum, color) {
    this.name = name,
    this.price = price,
    this.model = model,
    this.brand = brand,
    this.serialNum = serialNum,
    this.color = color;
  }
    
class laptop extends Computer{
    constructor(battery, charger, speed) {
        super()
        this.battery = battery,
        this.charger = charger,
        this.speed = speed
    }
    
    laptop() {
        console.log(laptop);
    }

}

//   computer() {
//     console.log(hp);
//   }
// }
// const hp = new Computer(
//   'Hp Elite',
//   '2.9m',
//   '14-CT100',
//   'HP',
//   'SC7783837GN',
//   'Silver',
// );

// hp.computer();

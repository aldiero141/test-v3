class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return `hi, my name is ${this.name} and i'm ${this.age} years old`
  }
}

class Study extends Person {
  id: number

  constructor(id: number, name: string, age: number) {
    super(name, age)
    this.id = id
  }

  study(): string {
    return `student ${this.name} (${this.id}) is studying`
  }
}

let student = new Study(14045, 'Budi', 12)
let greetings = student.greet()
let studying = student.study()
console.log(greetings, studying)

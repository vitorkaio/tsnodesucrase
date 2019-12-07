import Person from "./model/Person";

interface IAllIn {
  name?: string;
  age?: number;
}

const num: number = 5;
const list = [1, 2, 3, 4, 5];

console.log(num * 5);
console.log(list.reverse().pop());

const person: Person = new Person("Kat", 25);
console.log(person.toString());

const test: IAllIn = {};
test.name = "ww";
test.age = 14;

console.log(test.age);

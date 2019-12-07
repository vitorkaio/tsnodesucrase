
export default class Person {

  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public toString(): string {
    return `Name: ${this.name}\nAge: ${this.age}`;
  }

}

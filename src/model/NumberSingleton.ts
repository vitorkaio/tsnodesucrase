
// Singleton class
class NumberSingleton {

  public static instance: NumberSingleton;

  public static getInstance(): NumberSingleton {
    if (!NumberSingleton.instance) {
      NumberSingleton.instance = new NumberSingleton();
    }
    return NumberSingleton.instance;
  }

  private num: number;

  public setNum(num: number): void {
    this.num = num;
  }

  public getNum(): number {
    return this.num;
  }

}

export default NumberSingleton;

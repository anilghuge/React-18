class Demo {
  static s = 0;
  n = 0;
  constructor() {
    Demo.s = Demo.s + 1;
    this.n = this.n + 1;
  }
  Print(): void {
    console.log(`s=${Demo.s} n=${this.n}`);
  }
}

let obj1 = new Demo();
obj1.Print();

let obj2 = new Demo();
obj2.Print();

class Super {
  public Name = "TV";
  private Price = 45000;
  protected Stock = true;
}

class Derived extends Super {
  public Print(): void {}
}

let obj = new Derived();

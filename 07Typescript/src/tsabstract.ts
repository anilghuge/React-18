interface ProductContract {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  Print(): void;
}

abstract class ProductTemplate implements ProductContract {
  public Name: string = "";
  public Price: number = 0;
  public Qty: number = 0;
  abstract Total(): number;
  abstract Print(): void;
}

class ProductComponent extends ProductTemplate {
  Name = "Samsung TV";
  Price = 46000.44;
  Qty = 2;
  Total() {
    return this.Qty * this.Price;
  }
  Print(): void {
    console.log(
      `Name:${this.Name}\n Price=${this.Price} \n Qty=${
        this.Qty
      } \n Total=${this.Total()}`
    );
  }
}

let productComponent = new ProductComponent();
productComponent.Print();

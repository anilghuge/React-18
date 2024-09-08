import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent {
  Name = "Samsung TV";
  Price = 45000.45;
  Qty = 2;
  Total() {
    return this.Qty * this.Price;
  }
  Print() {
    console.log(
      `Name=${this.Name}\nPrice=${this.Price}\nQty=${
        this.Qty
      }\nTotal=${this.Total()}`
    );
  }
}

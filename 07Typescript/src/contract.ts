interface IBasicDetails {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  Print(): void;
}

interface ICategory {
  CategoryName: string;
}

interface IProduct extends ICategory, IBasicDetails {
  Title: string;
}

let product: IProduct = {
  Name: "Samsung TV",
  Price: 340000.67,
  Qty: 2,
  Total: function (): number {
    return this.Qty * this.Price;
  },
  Print: function () {
    console.log(
      `Name: ${this.Name} Price:\n${this.Price}\n Qty: ${
        this.Qty
      } Total: ${this.Total()},\nTitle:${this.Title},\nCategoryName:${
        this.CategoryName
      }}`
    );
  },
  Title: "TV Details",
  CategoryName: "TV",
};

product.Print();

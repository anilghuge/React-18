var product = {
    Name: "Samsung TV",
    Price: 340000.67,
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name: ".concat(this.Name, " Price:\n").concat(this.Price, "\n Qty: ").concat(this.Qty, " Total: ").concat(this.Total(), ",\nTitle:").concat(this.Title, ",\nCategoryName:").concat(this.CategoryName, "}"));
    },
    Title: "TV Details",
    CategoryName: "TV",
};
product.Print();

function Addition(a, b) {
    return a + b;
}
var c = Addition(1, 2);
console.log(c);
function Total(qty, price) {
    return qty * price;
}
function Print(Name, Price, Qty, Rating) {
    if (Rating) {
        console.log("Name:".concat(Name, ",\n\n    Price:").concat(Price, ",\n\n    Qty:").concat(Qty, ",\n\n    Total:").concat(Total(Qty, Price), ",\n    Rating:").concat(Rating, "\n  "));
    }
    else {
        console.log("Name:".concat(Name, ",\n\n    Price:").concat(Price, ",\n\n    Qty:").concat(Qty, ",\n\n    Total:").concat(Total(Qty, Price), "\n  "));
    }
}
Print("TV", 30000.56, 1, 5);

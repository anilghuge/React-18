"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComponent = void 0;
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.Name = "Samsung TV";
        this.Price = 45000.45;
        this.Qty = 2;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;

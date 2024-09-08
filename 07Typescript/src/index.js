"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductComponent_1 = require("./library/components/ProductComponent");
var uname = "Anil";
var age = 22;
function PrintDetails() {
    return "Hello ! ".concat(uname, " your age ").concat(age);
}
var tv = new ProductComponent_1.ProductComponent();
tv.Print();

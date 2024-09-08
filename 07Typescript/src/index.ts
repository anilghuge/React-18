import { ProductComponent } from "./library/components/ProductComponent";

let uname: string = "Anil";
let age: number = 22;

function PrintDetails(): string {
  return `Hello ! ${uname} your age ${age}`;
}

let tv = new ProductComponent();
tv.Print();

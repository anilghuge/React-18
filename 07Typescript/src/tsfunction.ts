function Addition(a: number, b: number): number {
  return a + b;
}

let c: number = Addition(1, 2);
console.log(c);

function Total(qty: number, price: number): number {
  return qty * price;
}

function Print(
  Name: string,
  Price: number,
  Qty: number,
  Rating?: number
): void {
  if (Rating) {
    console.log(`Name:${Name},\n
    Price:${Price},\n
    Qty:${Qty},\n
    Total:${Total(Qty, Price)},
    Rating:${Rating}
  `);
  } else {
    console.log(`Name:${Name},\n
    Price:${Price},\n
    Qty:${Qty},\n
    Total:${Total(Qty, Price)}
  `);
  }
}

Print("TV", 30000.56, 1, 5);

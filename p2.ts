//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let shoppingCart: any[] = [];
function addItem(name: string) {
  shoppingCart.push(name);
}
function removeItem(index: number) {
  shoppingCart.splice(index, 1);
}
function updateItem(name: string, updated: string) {
  const index: number = shoppingCart.indexOf(name);
  if (index < 0) console.log(`Item not Found`);
  else shoppingCart.splice(index, 1, updated);
}
addItem(`Apple`);
addItem(`Banana`);
addItem(`Peach`);
addItem(`Grapes`);
removeItem(1);
updateItem(`Peach`, `Kadooo`);

console.log(shoppingCart);

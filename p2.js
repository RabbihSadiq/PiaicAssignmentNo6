//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var shoppingCart = [];
function addItem(name) {
    shoppingCart.push(name);
}
function removeItem(index) {
    shoppingCart.splice(index, 1);
}
function updateQuantity(name, updated) {
    var index = shoppingCart.indexOf(name);
    if (index < 0)
        console.log("Item not Found");
    else
        shoppingCart.splice(index, 1, updated);
}
addItem("Apple");
addItem("Banana");
addItem("Peach");
addItem("Grapes");
removeItem(1);
updateQuantity("Peach", "Kadooo");
console.log(shoppingCart);
// var originalList: string[] = [
//   `Pepsi`,
//   `Lays`,
//   `IceCream`,
//   `Toys`,
//   `HouseHoldItems`,
// ];
// {
//   function removeItem(cA: string[]) {
//     cA.splice(1, 1);
//     return cA;
//   }
// }
// var cA: string[] = [`Pepsi`, `Lays`, `IceCream`, `Toys`, `HouseHoldItems`];
// removeItem(cA);
// {
//   function addItem(cA: string[]) {
//     cA.splice(0, 0, `Gum`);
//     return cA;
//   }
// }
// var cA: string[] = [`Pepsi`, `Lays`, `IceCream`, `Toys`, `HouseHoldItems`];
// addItem(cA);
// {
//   function updateItem(cA: string[]) {
//     cA.splice(4, 1, `Cake`);
//     return cA;
//   }
// }
// var cA: string[] = [`Pepsi`, `Lays`, `IceCream`, `Toys`, `HouseHoldItems`];
// updateItem(cA);
// console.log(`Shopping Cart`, cA);

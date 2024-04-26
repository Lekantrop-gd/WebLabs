function printShoppingList(list) {
    console.log("Shopping List:");
    list.forEach(item => {
        if (!item.purchased) {
            console.log(`${item.name}: ${item.quantity} units`);
        }
    });
    list.forEach(item => {
        if (item.purchased) {
            console.log(`${item.name}: ${item.quantity} units (Purchased)`);
        }
    });
}

function addPurchase(list, name, quantity) {
    let found = false;
    list.forEach(item => {
        if (item.name === name) {
            item.quantity += quantity;
            found = true;
        }
    });
    if (!found) {
        list.push({ name: name, quantity: quantity, purchased: false });
    }
}

function purchaseProduct(list, name) {
    list.forEach(item => {
        if (item.name === name) {
            item.purchased = true;
        }
    });
}

let shoppingList = [
    { name: "Milk", quantity: 1, purchased: false },
    { name: "Bread", quantity: 2, purchased: true },
    { name: "Eggs", quantity: 12, purchased: false }
];

printShoppingList(shoppingList);

addPurchase(shoppingList, "Butter", 1);
addPurchase(shoppingList, "Milk", 2);

printShoppingList(shoppingList);

purchaseProduct(shoppingList, "Milk");

printShoppingList(shoppingList);

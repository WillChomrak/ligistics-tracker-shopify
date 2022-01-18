
const http = new EasyHTTP;

// Handle update inventory PUT
function onClickUpdateInventory() {
    const updItem = {
      itemName: document.getElementById("updItemName").value,
      quantity: document.getElementById("updQuantity").value,
      warehouse: document.getElementById("updWarehouse").value,
    }
    console.log(updItem)
    http.put('http://localhost:5000/api/items/', updItem)
    .then(data => console.log(data, "Item updated successfully"))
    .catch(err => console.log(err));
}

// Handle delete inventory DELETE
function onClickDeleteInventory(event) {
    const delItem = {
      itemName: document.getElementById("delItemName").value
    }
    http.delete('http://localhost:5000/api/items/', delItem)
    .then(data => console.log(data, "Item deleted successfully"))
    .catch(err => console.log(err));
}

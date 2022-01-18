const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const dbObj = require('../../database/conn');


// Get all items
router.get('/', async (req, res) => {
    console.log("GET triggered")
    const db = dbObj.getDatabase();
    db.collection("Inventory_Items").find().toArray()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log("GET err: ", err))
    
});

// Get one item 
router.get('/:itemName', (req, res) => {
    const db = dbObj.getDatabase();
    const _itemName = req.params.itemName; // this will need to be changed to ID
    console.log("the item name: ", _itemName)
    db.collection("Inventory_Items").findOne({ itemName: _itemName })
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log(`GET one ${err}`))
});

// Create item
router.post('/', async (req, res) => { 
    console.log("POST triggered")
    const db = dbObj.getDatabase();
    const newItem = {
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        warehouse: req.body.warehouse  
    }

    if (!newItem.itemName || !newItem.quantity) {
        return res.status(400).json({msg: "Please include a value both Item name and Quantity fields"})
    };
    db.collection("Inventory_Items").insertOne(newItem)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("POST err: ", err))
});

// Update an item
router.put('/', async (req, res) => {
    console.log("PUT triggered")
    const db = dbObj.getDatabase();
    // const _itemName = req.params.itemName; // This will need to be changed to ID

    const updateItem = req.body;

    if (!updateItem.itemName || !updateItem.quantity || !updateItem.warehouse) {
        return res.status(400).send({msg: "Please fill all fields"});
    }

    db.collection("Inventory_Items").updateOne({ itemName: updateItem.itemName }, {$set: updateItem})
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("PUT err: ", err));

})

// Delete an item
router.delete('/', async (req, res) => {
    console.log("DELETE triggered")
    const db = dbObj.getDatabase();
    // const _itemName = req.params.itemName; // This will need to be changed to ID

    const deleteItem = req.body;
    console.log(deleteItem)
    db.collection("Inventory_Items").deleteOne({ itemName: deleteItem.itemName })
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("DELETE err: ", err));

})

module.exports = router;
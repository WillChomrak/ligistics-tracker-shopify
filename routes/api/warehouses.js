const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const dbObj = require('../../database/conn');

// GET all warehouses
router.get('/', async (req, res) => {
    console.log("GET triggered")
    const db = dbObj.getDatabase();
    db.collection("Warehouses").find().toArray()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log("GET err: ", err))
    
});

// Create warehouse
router.post('/', (req, res) => {
    const db = dbObj.getDatabase();
    const newWarehouse = {
        name: req.body.name,
        address: req.body.address
    }
    if (!newWarehouse.name || !newWarehouse.address) {
        return res.status(400).json({msg: "Please include a value for all fields"})
    };

    db.collection("Warehouses").insertOne(newWarehouse)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("POST err: ", err))
});

// Update a warehouse - This was not asked for
// router.put('/', async (req, res) => {
//     console.log("PUT triggered")
//     const db = dbObj.getDatabase();

//     const updateWarehouse = req.body;

//     if (!updateWarehouse.name || !updateWarehouse.address) {
//         return res.status(400).send({msg: "Please fill all fields"});
//     }

//     db.collection("Inventory_Items").updateOne({ name: updateWarehouse.name }, {$set: updateWarehouse})
//     .then(result => {
//         res.json(result);
//     })
//     .catch(err => console.log("PUT err: ", err));

// })

module.exports = router;
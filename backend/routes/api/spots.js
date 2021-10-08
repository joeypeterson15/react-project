const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models')

// const spotsRepository = require('../../db/spots-repository')

const router = express.Router()

router.get('/', asyncHandler(async function(req, res) {
    const list = await Spot.findAll();
    res.json(list)
}))

// router.get('/:id'. asyncHandler(async function(req, res) {
//     const spot = await Spot.one(req.params.id);
//     res.json(spot)
// }))

module.exports = router;

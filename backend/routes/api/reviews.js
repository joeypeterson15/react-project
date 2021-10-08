
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models')

// const spotsRepository = require('../../db/spots-repository')

const router = express.Router()



router.get('/:id', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll({where: {
        spotId : req.params.id
    }});
    res.json(reviews)
}))

module.exports = router;

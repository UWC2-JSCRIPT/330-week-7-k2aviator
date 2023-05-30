const mongoose = require('mongoose');
const Weather = require('../models/weather');

module.exports.getAllLocations = async () => {
    //console.log("DAO  - get all weather locations")
    const returnAllLocations = await Weather.find().lean();
    return returnAllLocations;
}

module.exports.getLocations = async (location) => {
    // console.log("DAO  - get specific weather locations")
    // console.log("term to search for ", location)
    const returnLocation = await Weather.findOne({name:location}).lean();
    return returnLocation;
}


class BadDataError extends Error {};
module.exports.BadDataError = BadDataError;

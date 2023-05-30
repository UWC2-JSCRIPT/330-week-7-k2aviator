const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get('/', async (req, res, next)=> {
    const name = req.query.name;
    const getLocation = await weatherDAO.getLocations(name)
    //console.log("get location is ", getLocation)
    if (!name){
        res.redirect('/weather');
    } else {
        if (!getLocation){
            const message = `The weather for ${name} is not available`
            //console.log("Error message to render is ", message)
            return res.status(404).render('weatherLocation', {message: message })    
        } else {
            const temp = getLocation.temperature
            const message = `The weather for ${name} is ${temp}`
            //console.log("Success message to render is ", message)
            res.render('weatherLocation', {message: message })
        }
    }
   
})


module.exports = router;
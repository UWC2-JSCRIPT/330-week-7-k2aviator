const { Router } = require('express');
const router = Router();

router.use('/landing', require('./landing'))
router.use('/weather', require('./weather'))
router.use('/weather/location', require('./weatherLocation'))

module.exports = router;
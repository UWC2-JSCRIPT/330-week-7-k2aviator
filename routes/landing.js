const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next)=> {
    const timeStamp = new Date().toTimeString();
    res.render('index', {time: timeStamp, items: ['item one', 'other', 'new item']})
})


module.exports = router;
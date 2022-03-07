var router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/weather', require('./weathers'));

router.get('/', (req, res) => {
    res.send("Router working fine!");
})

module.exports = router;
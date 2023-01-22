const router = require('express').Router()
const user = require('./user.service')

router.post('/', user.saveUser)
router.post('/local', user.localLogin)

module.exports = router
export {}
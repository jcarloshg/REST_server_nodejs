

const { Router } = require('express');

const router = Router();
const {
    userGet,
    userPut,
    userPost,
    userDelelte,
    userPatch, } = require('../controllers/user.controller');

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelelte);

router.patch('/', userPatch);

module.exports = router;
const { Router } =  require('express');
const { check } = require('express-validator');
const { login } =  require('../controllers/auth.controllers')
const router = Router();

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('nombre', 'El nombre es incorrecto').not().isEmpty()
    ],
    login    
)

module.exports = router
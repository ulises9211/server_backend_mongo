const { Router } =  require('express');
const { getUsers, createUser } = require('../controllers/usuario.controllers');
const { check } = require('express-validator');
const { validaJWT } = require('../middleware/validar-jwt')
const router = Router();

router.get('/', validaJWT, getUsers);
            
router.post('/',
            [
                check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                check('password', 'El password es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail()
            ],
            createUser
);

module.exports = router;
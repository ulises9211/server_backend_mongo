const { json } = require("express");
const Usuario = require('../models/usuario');
const { response } = require('express');
const { validationResult } = require('express-validator')
const { generateJWT } = require('../helper/jwt');

const getUsers = async ( req, res ) => {
    const usuarios = req.body;
    res.json({
        ok: true,
        usuarios
    });
    console.log(res.json)
}

const createUser = async ( req, res = response) => {
    const {email, password, nombre} = req.body;

    const errores = validationResult( req );
    if( !errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    try {
        const existeEmail = await Usuario.findOne({email});

        if(existeEmail){
            return res.status(400).json ({
                ok:false,
                msg: 'El correo ya existe'
            });
        }
        const usuario = new Usuario( req.body );
        //GUARDAR USUARIO
        await usuario.save();
        //CREAR TOKEN
        const token = await generateJWT(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
    
}

module.exports = {
    getUsers, createUser
}
const { response } = require('express');
const { generateJWT } = require('../helper/jwt');
const Usuario = require('../models/usuario')

const login  = async (req, res = response) => {

    const {email, nombre} = req.body;
    
    try{
        const emailDB = await Usuario.find({ email });
        console.log(emailDB);
        if ( !emailDB ) {
            return res.status(400).json({
                ok: false,
                msg: 'El email no existe'
            });
        }

        const nombreDB = await Usuario.findOne({ nombre });
        console.log(nombreDB);
        if (!nombreDB) {
            return res.status(400).json({
                ok: false,
                msg: "correo"
            });
        }

        const token = await generateJWT( nombreDB.id);

        return res.json({
            ok:true,
            token
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}
module.exports = {
    login
}
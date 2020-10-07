const jwt = require('jsonwebtoken');
const validaJWT = (req, res, next) => {

    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify( token, process.env.JWT_SECRET);
        req.uid = uid;
        console.log('uid:',uid);
    } catch (error) {
        return res.status(401).json({
            ok: false, 
            msg: 'Token no valido'
        })
    }

    next();
}

module.exports = {
    validaJWT
}
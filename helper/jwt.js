const jwt = require('jsonwebtoken');

 const generateJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {
        payload = {
            uid
        }
    
        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, ( err, token ) =>{
            if( err ){
                console.log(err);
                reject('No se pudo generar el jsonwettoken')
            }else{
                resolve( token );
            }
    
        })

    });
 }
  module.exports = {
      generateJWT
  }
  
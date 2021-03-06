'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_app';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        //mlastname: user.mlastname,
        //sexo: user.sexo,
        //bday: user.bday,
        //mobile: user.mobile,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix 
    };

    return jwt.encode(payload, secret);
};
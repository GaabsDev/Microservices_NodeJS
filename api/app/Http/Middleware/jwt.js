const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){
    const token = req.headers['authorization']

    if (!token) return res.status(401).json({ auth: false, message: 'Usuário não autenticado.' });

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autorizar o token.' });
        req.user = decoded.user;
        next();
    });
}

module.exports = verifyJWT;

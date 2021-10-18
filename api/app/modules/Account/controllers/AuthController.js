const User = require('../models/User');

const baseController = require('../../../Http/Controllers/baseController.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        try {

            const {email, password} = req.body;

            const user = await User.findOne({email})

            // return res.send(user)

            bcrypt.compare(password, user.password, function (err, response) {
                if (response) {

                    const payload = {
                        user : user
                    }

                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                        expiresIn: 3600 // 1 hour
                    })

                    const data = {
                        auth: true,
                        token: token,
                        user : user
                    }

                    return baseController.responseSucess(res, 'Login realizado com sucesso!', data)
                } else {
                    return baseController.responseError
                    (res, 'A senha informada está incorreta.' +
                        ' Verifique os dados digitados e tente novamente.')
                }
            })

        } catch (e) {
            return baseController.responseError(res, e)
        }
    },

    async create(req, res) {

        try {

            const {name, email, password} = req.body;

            var user = await User.findOne({email})

            if (user) {
                return baseController.responseError
                (res, 'E-mail já cadastrado na base de dados! Favor informar outro e-mail, ou recupere sua senha.')
            } else {
                bcrypt.hash(password, 10, function (err, password) {

                    user = User.create({name, email, password}).then(response => {

                        const data = {
                            user: response
                        }

                        return baseController.responseSucess(res, 'Usuário cadastrado com sucesso!', data)
                    }).catch(error => {

                        throw 'Erro ao inserir usuário no banco de dados. Mas não se preocupe, tente novamente.'
                    })

                });
            }
        } catch (e) {
            return baseController.responseError(res, e)
        }
    }
};

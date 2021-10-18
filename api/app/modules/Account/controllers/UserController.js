const baseController = require('../../../Http/Controllers/baseController')
const usersRepository = require('../repositories/Infraestruture/usersRepository')
var _usersRepository = null

class userController extends baseController{

   constructor() {
       super()
       _usersRepository = new usersRepository()
   }

    async fetch(req, res)  {

        try {

            const _id = req.user._id

            const user = await _usersRepository.find({_id})

             return response.success(res, '', {user})
        } catch (e) {
            return response.error(res, '')
        }
    }

}

module.exports = userController





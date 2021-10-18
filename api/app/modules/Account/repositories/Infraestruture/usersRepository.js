const baseRepository = require('../../../../Http/Infraestruture/baseRepository')

const User = require('../../models/User');

class usersRepository extends baseRepository {

    constructor() {
        super(User);
        // parent.
    }

    async get(){
       return await this.find()
    }
}

module.exports = usersRepository;

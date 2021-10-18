
var Model = null;

// TODO : refatorar pra typescript

class BaseRepository {

    constructor(model) {
        Model = model
    }

    // create(item: T): Promise<boolean> {
    //     throw new Error("Method not implemented.");
    // }
    // update(id: string, item: T): Promise<boolean> {
    //     throw new Error("Method not implemented.");
    // }
    // delete(id: string): Promise<boolean> {
    //     throw new Error("Method not implemented.");
    // }
    async find(params) {
        const queryBuilder = await Model.findOne(params)

        return queryBuilder
    }

    // findOne(id: string): Promise<T> {
    //     throw new Error("Method not implemented.");
    // }
}

module.exports = BaseRepository;
